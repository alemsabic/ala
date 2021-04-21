import { getRenderer } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/content/theme.ts';installTheme();
import { countCards } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/coding-blog-plugin/dist/es5/components/article-card/count-cards.js';countCards();
import { codeSelection } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { ToCPrevNext } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { CollapseControl } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';
import { GithubSearch } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { GitterToggle } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/gitter/index.js';
import { DarkModeSwitch } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { SeeTypo } from '/home/runner/work/govor_ulice/govor_ulice/.codedoc/components/SeeTypo/index.tsx';

const components = {
  '5gmGMndClxzssD0502O/fw==': ToCPrevNext,
  'hl0suM4VGyWK9WxuDSaATw==': CollapseControl,
  'kN5q/BUg4ePxM3tiuRyTGw==': GithubSearch,
  '/zJPluspbY5rOAfXbpmcKg==': ToCToggle,
  '9hq3IyY1t95pSK1lX67E6w==': GitterToggle,
  'YPAIEJYDonq5gAMGRI2sOg==': DarkModeSwitch,
  '5j8zqRdyRU46vw5RmumoGg==': ConfigTransport,
  '/l3ho6XmL3LiwD8y7enfHQ==': SeeTypo
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
