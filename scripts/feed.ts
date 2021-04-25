import { Content } from '../lib/content'
import { Site } from '../lib/site'
import rss from 'rss'
import fs from 'fs'
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

export function generate() {
  let site = Site.instance()

  let feed = new rss({
    title: 'Duncan Davidson',
    site_url: 'https://duncan.dev',
    feed_url: 'https://duncan.dev/feed.xml',
  })

  site.latestContent(20).forEach((item: Content) => {
    var title
    if (item.emoji) {
      title = `${item.emoji} ${item.title}`
    } else {
      title = item.title
    }
    let content = unified()
      .use(markdown)
      .use(html)
      .processSync(item.text)
      .contents.toString()

    if (item.type != 'photo') {
      feed.item({
        title: title,
        guid: item.slug,
        url: `https://duncan.dev/${item.slug}`,
        date: item.date,
        description: content,
        author: `Duncan Davidson`,
      })
    }
  })

  let data = feed.xml({ indent: true })
  fs.writeFileSync('./out/feed.xml', data)
}

generate()
