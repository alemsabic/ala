import { RendererLike } from '@connectv/html';
import { File } from 'rxline/fs';
import { Page, Meta, ContentNav, Fonts, ToC, GithubSearch$ } from '@codedoc/core/components';

import { config } from '../config';
import { Header } from './header';
import { Footer } from './footer';


export function content(_content: HTMLElement, toc: HTMLElement, renderer: RendererLike<any, any>, file: File<string>) {
  return (
    <Page title={config.page.title.extractor(_content, config, file)}
          favicon={config.page.favicon}
          meta={<Meta {...config.page.meta}/>}
          fonts={<Fonts {...config.page.fonts}/>}
          scripts={config.page.scripts}
          stylesheets={config.page.stylesheets}
          header={<Header {...config}/>}
          footer={<Footer {...config}/>}
          toc={
            <ToC default="open"
            search={
                  config.misc?.github ? 
                  <GithubSearch$
                    repo={config.misc.github.repo} 
                    user={config.misc.github.user}
                    root={config.src.base}
                    pick={config.src.pick.source}
                    drop={config.src.drop.source}
                  /> : false
            }>{toc}</ToC>
          }>

<style>
{`
h2 {line-height:1.3;}
h3 {line-height:1.3;}
h1 {line-height:1.3; text-transform:uppercase;}

h1{font-size: calc(5rem + 1.8vw);}
h2 {font-size: calc(1.6rem + 1.1vw);}
h3 {font-size: calc(0.85rem + 0.6vw);}
.container p, .container ol, .container ul {font-size: calc(1rem + 0.15vw);}

.content-0-0-12 { 
/* this will hide the scrollbar in mozilla based browsers */
overflow: -moz-scrollbars-none;
/* this will hide the scrollbar in internet explorers */
-ms-overflow-style: none;
}
.content-0-0-12::-webkit-scrollbar { 
  width: 0 !important;
  display: none; 
}

.cs--holder-4 {
  opacity:1;
}

.inside a.icon-font {
  font-size:36px;
  opacity: 0.35;
}

body .inside a.icon-font {
  color: rgba(17,17,17);
}

body.dark .inside a.icon-font {
  color: rgba(105,240,174);
}

.inside a.icon-font:hover {
  opacity: 1;
  text-decoration: none !important;
}
.container hr {
  background: none;
  border: 0;
  
}
.container hr::after {
  content: '* * *';
  display: block;
  opacity: 0.5;
  line-height: 1;
  text-align: center;
}
body::before {
  content: "";
  position: fixed;
  top: -10px;
  left: 0;
  width: 100%;
  height: 10px;
  box-shadow: 0px 0 10px rgba(0, 0, 0, 0.8);
  z-index: 100;
}

`}
</style>

      {_content}
      <ContentNav content={_content}/>
    </Page>
  )
}
