import Head from 'next/head';

import Image from '@/components/Image';

const AboutPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Thiều Hoa | Thời Trang Nữ - Thời Trang Trung Niên</title>
        <meta property="og:url" content="https://thieuhoa.com.vn/gioi-thieu-thieu-hoa" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi" />
        <meta property="og:site_name" content="Thiều Hoa - Xu Hướng Phái Đẹp" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <meta
          name="description"
          content="Thiều Hoa tự hào là Thương hiệu tiên phong về thời trang Nữ - thời trang Trung Niên tại Việt Nam với kim chỉ nam luôn lấy chất lượng làm đầu."
        />
        <meta property="og:title" content="Thiều Hoa | Thời Trang Nữ - Thời Trang Trung Niên" />
        <meta
          property="og:description"
          content="Thiều Hoa tự hào là Thương hiệu tiên phong về thời trang Nữ - thời trang Trung Niên tại Việt Nam với kim chỉ nam luôn lấy chất lượng làm đầu."
        />
        <meta
          property="og:image"
          content="https://thieuhoa.com.vn/wp-content/uploads/2024/07/Zsk05LSCR9PtZkBSqOaAZMNw6bF09JneDM5uAIYq.webp"
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
        <link rel="dns-prefetch" href="https://connect.facebook.net/" />
        <link
          href="https://www.googletagmanager.com/gtag/js?id=AW-973276310"
          rel="preload"
          as="script"
        />
        <meta
          name="google-site-verification"
          content="qGe4Tm-LLUMPhPTFyOYDxWBtYy1cr3VkftV-Gq_hbik"
        />
        {/* Google Tag Manager */}
        {/* End Google Tag Manager */}
        {/* Global site tag (gtag.js) - Google Ads: 973276310 */}
        {/* Google tag (gtag.js) */}
        <meta name="csrf-token" content="DHFkISJ2FItyHuaHKfgg2O3If0kqQndV6nerEOFt" />
        <link rel="stylesheet" href="https://thieuhoa.com.vn/v2/css/lib/style.css" />
        <style
          id="style_ladi"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n      a,\n      abbr,\n      acronym,\n      address,\n      applet,\n      article,\n      aside,\n      audio,\n      b,\n      big,\n      blockquote,\n      body,\n      button,\n      canvas,\n      caption,\n      center,\n      cite,\n      code,\n      dd,\n      del,\n      details,\n      dfn,\n      div,\n      dl,\n      dt,\n      em,\n      embed,\n      fieldset,\n      figcaption,\n      figure,\n      footer,\n      form,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6,\n      header,\n      hgroup,\n      html,\n      i,\n      iframe,\n      img,\n      input,\n      ins,\n      kbd,\n      label,\n      legend,\n      li,\n      mark,\n      menu,\n      nav,\n      object,\n      ol,\n      output,\n      p,\n      pre,\n      q,\n      ruby,\n      s,\n      samp,\n      section,\n      select,\n      small,\n      span,\n      strike,\n      strong,\n      sub,\n      summary,\n      sup,\n      table,\n      tbody,\n      td,\n      textarea,\n      tfoot,\n      th,\n      thead,\n      time,\n      tr,\n      tt,\n      u,\n      ul,\n      var,\n      video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        outline: 0;\n        font-size: 100%;\n        font: inherit;\n        vertical-align: baseline;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n      article,\n      aside,\n      details,\n      figcaption,\n      figure,\n      footer,\n      header,\n      hgroup,\n      menu,\n      nav,\n      section {\n        display: block;\n      }\n      body {\n        line-height: 1;\n      }\n      a {\n        text-decoration: none;\n      }\n      ol,\n      ul {\n        list-style: none;\n      }\n      blockquote,\n      q {\n        quotes: none;\n      }\n      blockquote:after,\n      blockquote:before,\n      q:after,\n      q:before {\n        content: "";\n        content: none;\n      }\n      table {\n        border-collapse: collapse;\n        border-spacing: 0;\n      }\n      .ladi-loading {\n        z-index: 900000000000;\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n      .ladi-loading .loading {\n        width: 80px;\n        height: 80px;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        margin: auto;\n        overflow: hidden;\n        position: absolute;\n      }\n      .ladi-loading .loading div {\n        position: absolute;\n        width: 6px;\n        height: 6px;\n        background: #fff;\n        border-radius: 50%;\n        animation: ladi-loading 1.2s linear infinite;\n      }\n      .ladi-loading .loading div:nth-child(1) {\n        animation-delay: 0s;\n        top: 37px;\n        left: 66px;\n      }\n      .ladi-loading .loading div:nth-child(2) {\n        animation-delay: -0.1s;\n        top: 22px;\n        left: 62px;\n      }\n      .ladi-loading .loading div:nth-child(3) {\n        animation-delay: -0.2s;\n        top: 11px;\n        left: 52px;\n      }\n      .ladi-loading .loading div:nth-child(4) {\n        animation-delay: -0.3s;\n        top: 7px;\n        left: 37px;\n      }\n      .ladi-loading .loading div:nth-child(5) {\n        animation-delay: -0.4s;\n        top: 11px;\n        left: 22px;\n      }\n      .ladi-loading .loading div:nth-child(6) {\n        animation-delay: -0.5s;\n        top: 22px;\n        left: 11px;\n      }\n      .ladi-loading .loading div:nth-child(7) {\n        animation-delay: -0.6s;\n        top: 37px;\n        left: 7px;\n      }\n      .ladi-loading .loading div:nth-child(8) {\n        animation-delay: -0.7s;\n        top: 52px;\n        left: 11px;\n      }\n      .ladi-loading .loading div:nth-child(9) {\n        animation-delay: -0.8s;\n        top: 62px;\n        left: 22px;\n      }\n      .ladi-loading .loading div:nth-child(10) {\n        animation-delay: -0.9s;\n        top: 66px;\n        left: 37px;\n      }\n      .ladi-loading .loading div:nth-child(11) {\n        animation-delay: -1s;\n        top: 62px;\n        left: 52px;\n      }\n      .ladi-loading .loading div:nth-child(12) {\n        animation-delay: -1.1s;\n        top: 52px;\n        left: 62px;\n      }\n      @keyframes ladi-loading {\n        0%,\n        100%,\n        20%,\n        80% {\n          transform: scale(1);\n        }\n        50% {\n          transform: scale(1.5);\n        }\n      }\n      .ladipage-message {\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        z-index: 10000000000;\n        background: rgba(0, 0, 0, 0.3);\n      }\n      .ladipage-message .ladipage-message-box {\n        width: 400px;\n        max-width: calc(100% - 50px);\n        height: 160px;\n        border: 1px solid rgba(0, 0, 0, 0.3);\n        background-color: #fff;\n        position: fixed;\n        top: calc(50% - 155px);\n        left: 0;\n        right: 0;\n        margin: auto;\n        border-radius: 10px;\n      }\n      .ladipage-message .ladipage-message-box span {\n        display: block;\n        background-color: rgba(6, 21, 40, 0.05);\n        color: #000;\n        padding: 12px 15px;\n        font-weight: 600;\n        font-size: 16px;\n        line-height: 16px;\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n      }\n      .ladipage-message .ladipage-message-box .ladipage-message-text {\n        display: -webkit-box;\n        font-size: 14px;\n        padding: 0 20px;\n        margin-top: 10px;\n        line-height: 18px;\n        -webkit-line-clamp: 3;\n        -webkit-box-orient: vertical;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .ladipage-message .ladipage-message-box .ladipage-message-close {\n        display: block;\n        position: absolute;\n        right: 15px;\n        bottom: 10px;\n        margin: 0 auto;\n        padding: 10px 0;\n        border: none;\n        width: 80px;\n        text-transform: uppercase;\n        text-align: center;\n        color: #000;\n        background-color: #e6e6e6;\n        border-radius: 5px;\n        text-decoration: none;\n        font-size: 14px;\n        line-height: 14px;\n        font-weight: 600;\n        cursor: pointer;\n      }\n      .lightbox-screen {\n        display: none;\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        margin: auto;\n        z-index: 9000000080;\n        background: rgba(0, 0, 0, 0.5);\n      }\n      .lightbox-screen .lightbox-close {\n        position: absolute;\n        z-index: 9000000090;\n        cursor: pointer;\n      }\n      .lightbox-screen .lightbox-hidden {\n        display: none;\n      }\n      .lightbox-screen .lightbox-close {\n        width: 16px;\n        height: 16px;\n        margin: 10px;\n        background-repeat: no-repeat;\n        background-position: center center;\n        background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23fff%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M23.4144%202.00015L2.00015%2023.4144L0.585938%2022.0002L22.0002%200.585938L23.4144%202.00015Z%22%3E%3C%2Fpath%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.00015%200.585938L23.4144%2022.0002L22.0002%2023.4144L0.585938%202.00015L2.00015%200.585938Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");\n      }\n      body {\n        font-size: 12px;\n        -ms-text-size-adjust: none;\n        -moz-text-size-adjust: none;\n        -o-text-size-adjust: none;\n        -webkit-text-size-adjust: none;\n        background-color: #fff;\n      }\n      .overflow-hidden {\n        overflow: hidden;\n      }\n      .ladi-transition {\n        transition: all 150ms linear 0s;\n      }\n      .z-index-1 {\n        z-index: 1;\n      }\n      .opacity-0 {\n        opacity: 0;\n      }\n      .height-0 {\n        height: 0 !important;\n      }\n      .pointer-events-none {\n        pointer-events: none;\n      }\n      .transition-parent-collapse-height {\n        transition: height 150ms linear 0s;\n      }\n      .transition-parent-collapse-top {\n        transition: top 150ms linear 0s;\n      }\n      .transition-readmore {\n        transition: height 350ms linear 0s;\n      }\n      .transition-collapse {\n        transition: height 150ms linear 0s;\n      }\n      body.grab {\n        cursor: grab;\n      }\n      .ladi-wraper {\n        width: 100%;\n        min-height: 100%;\n        overflow: hidden;\n      }\n      .ladi-container {\n        position: relative;\n        margin: 0 auto;\n        height: 100%;\n      }\n      .ladi-overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 100%;\n        pointer-events: none;\n      }\n      .ladi-element {\n        position: absolute;\n      }\n      @media (hover: hover) {\n        .ladi-check-hover {\n          opacity: 0;\n        }\n      }\n      .ladi-section {\n        margin: 0 auto;\n        position: relative;\n      }\n      .ladi-section[data-tab-id] {\n        display: none;\n      }\n      .ladi-section.selected[data-tab-id] {\n        display: block;\n      }\n      .ladi-section .ladi-section-background {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        pointer-events: none;\n        overflow: hidden;\n      }\n      .ladi-carousel {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n      .ladi-carousel .ladi-carousel-content {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        left: 0;\n        top: 0;\n        transition: top 350ms ease-in-out, left 350ms ease-in-out;\n      }\n      .ladi-carousel .ladi-carousel-arrow {\n        position: absolute;\n        top: calc(50% - (33px) / 2);\n        cursor: pointer;\n        z-index: 90000040;\n        width: 33px;\n        height: 33px;\n        background-repeat: no-repeat;\n        background-position: center center;\n        background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23000%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.00015%200.585938L18.4144%2012.0002L7.00015%2023.4144L5.58594%2022.0002L15.5859%2012.0002L5.58594%202.00015L7.00015%200.585938Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");\n      }\n      .ladi-carousel .ladi-carousel-arrow-left {\n        left: 5px;\n        transform: rotateY(180deg);\n        -webkit-transform: rotateY(180deg);\n      }\n      .ladi-carousel .ladi-carousel-arrow-right {\n        right: 5px;\n      }\n      .ladi-carousel-indicators-circle {\n        display: inline-flex;\n        gap: 10px;\n        position: absolute;\n        bottom: -20px;\n        left: 0;\n        right: 0;\n        margin: auto;\n        width: fit-content;\n      }\n      .ladi-carousel-indicators-circle .item {\n        width: 10px;\n        height: 10px;\n        background-color: #d6d6d6;\n        border-radius: 100%;\n        cursor: pointer;\n        outline: 1px solid #fff;\n      }\n      .ladi-carousel-indicators-circle .item.selected,\n      .ladi-carousel-indicators-circle .item:hover {\n        background-color: #808080;\n      }\n      .ladi-carousel-indicators-number {\n        display: inline-flex;\n        gap: 10px;\n        position: absolute;\n        bottom: -20px;\n        left: 0;\n        right: 0;\n        margin: auto;\n        width: fit-content;\n      }\n      .ladi-carousel-indicators-number .item {\n        width: 15px;\n        height: 15px;\n        background-color: #d6d6d6;\n        border-radius: 100%;\n        cursor: pointer;\n        font-size: 10px;\n        text-align: center;\n        line-height: 15px;\n        outline: 1px solid #fff;\n      }\n      .ladi-carousel-indicators-number .item.selected,\n      .ladi-carousel-indicators-number .item:hover {\n        background-color: #808080;\n        color: #fff;\n      }\n      .ladi-gallery {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n      }\n      .ladi-gallery .ladi-gallery-view {\n        position: absolute;\n        overflow: hidden;\n      }\n      .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item {\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center center;\n        width: 100%;\n        height: 100%;\n        position: relative;\n        display: none;\n        transition: transform 500ms ease-in-out;\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n        perspective: 1000px;\n      }\n      .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item.play-video {\n        cursor: pointer;\n      }\n      .ladi-gallery\n        .ladi-gallery-view\n        > .ladi-gallery-view-item.play-video:after {\n        content: "";\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        margin: auto;\n        width: 60px;\n        height: 60px;\n        background: url(https://w.ladicdn.com/source/ladipage-play.svg?v=1.0)\n          no-repeat center center;\n        background-size: contain;\n        pointer-events: none;\n        cursor: pointer;\n      }\n      .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item.next,\n      .ladi-gallery\n        .ladi-gallery-view\n        > .ladi-gallery-view-item.selected.right {\n        left: 0;\n        transform: translate3d(100%, 0, 0);\n      }\n      .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item.prev,\n      .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item.selected.left {\n        left: 0;\n        transform: translate3d(-100%, 0, 0);\n      }\n      .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item.next.left,\n      .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item.prev.right,\n      .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item.selected {\n        left: 0;\n        transform: translate3d(0, 0, 0);\n      }\n      .ladi-gallery .ladi-gallery-view > .selected,\n      .ladi-gallery .ladi-gallery-view > .next,\n      .ladi-gallery .ladi-gallery-view > .prev {\n        display: block;\n      }\n      .ladi-gallery .ladi-gallery-view > .selected {\n        left: 0;\n      }\n      .ladi-gallery .ladi-gallery-view > .next,\n      .ladi-gallery .ladi-gallery-view > .prev {\n        position: absolute;\n        top: 0;\n        width: 100%;\n      }\n      .ladi-gallery .ladi-gallery-view > .next {\n        left: 100%;\n      }\n      .ladi-gallery .ladi-gallery-view > .prev {\n        left: -100%;\n      }\n      .ladi-gallery .ladi-gallery-view > .next.left,\n      .ladi-gallery .ladi-gallery-view > .prev.right {\n        left: 0;\n      }\n      .ladi-gallery .ladi-gallery-view > .selected.left {\n        left: -100%;\n      }\n      .ladi-gallery .ladi-gallery-view > .selected.right {\n        left: 100%;\n      }\n      .ladi-gallery .ladi-gallery-control {\n        position: absolute;\n        overflow: hidden;\n      }\n      .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow {\n        position: absolute;\n        top: calc(50% - (33px) / 2);\n        cursor: pointer;\n        z-index: 90000040;\n      }\n      .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow-left {\n        left: 5px;\n        transform: rotateY(180deg);\n        -webkit-transform: rotateY(180deg);\n      }\n      .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow-right {\n        right: 5px;\n      }\n      .ladi-gallery .ladi-gallery-control .ladi-gallery-control-arrow {\n        position: absolute;\n        cursor: pointer;\n        z-index: 90000040;\n      }\n      .ladi-gallery .ladi-gallery-control .ladi-gallery-control-box {\n        position: relative;\n      }\n      .ladi-gallery\n        .ladi-gallery-control\n        .ladi-gallery-control-box\n        .ladi-gallery-control-item {\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center center;\n        float: left;\n        position: relative;\n        cursor: pointer;\n        filter: invert(15%);\n      }\n      .ladi-gallery\n        .ladi-gallery-control\n        .ladi-gallery-control-box\n        .ladi-gallery-control-item.play-video:after {\n        content: "";\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        margin: auto;\n        width: 30px;\n        height: 30px;\n        background: url(https://w.ladicdn.com/source/ladipage-play.svg?v=1.0)\n          no-repeat center center;\n        background-size: contain;\n        pointer-events: none;\n        cursor: pointer;\n      }\n      .ladi-gallery\n        .ladi-gallery-control\n        .ladi-gallery-control-box\n        .ladi-gallery-control-item:hover {\n        filter: none;\n      }\n      .ladi-gallery\n        .ladi-gallery-control\n        .ladi-gallery-control-box\n        .ladi-gallery-control-item.selected {\n        filter: none;\n      }\n      .ladi-gallery\n        .ladi-gallery-control\n        .ladi-gallery-control-box\n        .ladi-gallery-control-item:last-child {\n        margin-right: 0 !important;\n        margin-bottom: 0 !important;\n      }\n      .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow,\n      .ladi-gallery .ladi-gallery-control .ladi-gallery-control-arrow {\n        width: 33px;\n        height: 33px;\n        background-repeat: no-repeat;\n        background-position: center center;\n        background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23000%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.00015%200.585938L18.4144%2012.0002L7.00015%2023.4144L5.58594%2022.0002L15.5859%2012.0002L5.58594%202.00015L7.00015%200.585938Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");\n      }\n      .ladi-gallery.ladi-gallery-bottom .ladi-gallery-view {\n        top: 0;\n        width: 100%;\n      }\n      .ladi-gallery.ladi-gallery-bottom .ladi-gallery-control {\n        width: 100%;\n        bottom: 0;\n      }\n      .ladi-gallery.ladi-gallery-bottom\n        .ladi-gallery-control\n        .ladi-gallery-control-arrow {\n        top: calc(50% - (33px) / 2);\n      }\n      .ladi-gallery.ladi-gallery-bottom\n        .ladi-gallery-control\n        .ladi-gallery-control-arrow-left {\n        left: 0px;\n        transform: rotateY(180deg) scale(0.6);\n        -webkit-transform: rotateY(180deg) scale(0.6);\n      }\n      .ladi-gallery.ladi-gallery-bottom\n        .ladi-gallery-control\n        .ladi-gallery-control-arrow-right {\n        right: 0px;\n        transform: scale(0.6);\n        -webkit-transform: scale(0.6);\n      }\n      .ladi-gallery.ladi-gallery-bottom\n        .ladi-gallery-control\n        .ladi-gallery-control-box {\n        display: -webkit-inline-flex;\n        display: inline-flex;\n        left: 0;\n        transition: left 150ms ease-in-out;\n      }\n      .ladi-box {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n      #SECTION_POPUP .ladi-container {\n        z-index: 90000070;\n      }\n      #SECTION_POPUP .ladi-container > .ladi-element {\n        z-index: 90000070;\n        position: fixed;\n        display: none;\n      }\n      #SECTION_POPUP .ladi-container > .ladi-element[data-fixed-close="true"] {\n        position: relative !important;\n      }\n      #SECTION_POPUP .ladi-container > .ladi-element.hide-visibility {\n        display: block !important;\n        visibility: hidden !important;\n      }\n      #SECTION_POPUP .popup-close {\n        position: absolute;\n        right: 0px;\n        top: 0px;\n        z-index: 9000000080;\n        cursor: pointer;\n        width: 16px;\n        height: 16px;\n        margin: 10px;\n        background-repeat: no-repeat;\n        background-position: center center;\n        background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23000%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M23.4144%202.00015L2.00015%2023.4144L0.585938%2022.0002L22.0002%200.585938L23.4144%202.00015Z%22%3E%3C%2Fpath%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.00015%200.585938L23.4144%2022.0002L22.0002%2023.4144L0.585938%202.00015L2.00015%200.585938Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");\n      }\n      .ladi-popup {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n      }\n      .ladi-popup .ladi-popup-background {\n        height: 100%;\n        width: 100%;\n        pointer-events: none;\n      }\n      .ladi-button {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n      .ladi-button:active {\n        transform: translateY(2px);\n        transition: transform 0.2s linear;\n      }\n      .ladi-button .ladi-button-background {\n        height: 100%;\n        width: 100%;\n        pointer-events: none;\n        transition: inherit;\n      }\n      .ladi-button > .ladi-button-headline,\n      .ladi-button > .ladi-button-shape {\n        width: 100% !important;\n        height: 100% !important;\n        top: 0 !important;\n        left: 0 !important;\n        display: table;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n      }\n      .ladi-button > .ladi-button-shape .ladi-shape {\n        margin: auto;\n        top: 0;\n        bottom: 0;\n      }\n      .ladi-button > .ladi-button-headline .ladi-headline {\n        display: table-cell;\n        vertical-align: middle;\n      }\n      .ladi-form {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n      }\n      .ladi-form > .ladi-element {\n        text-transform: inherit;\n        text-decoration: inherit;\n        text-align: inherit;\n        letter-spacing: inherit;\n        color: inherit;\n        background-size: inherit;\n        background-attachment: inherit;\n        background-origin: inherit;\n      }\n      .ladi-form .ladi-button > .ladi-button-headline {\n        color: initial;\n        font-size: initial;\n        font-weight: initial;\n        text-transform: initial;\n        text-decoration: initial;\n        font-style: initial;\n        text-align: initial;\n        letter-spacing: initial;\n        line-height: initial;\n      }\n      .ladi-form > .ladi-element .ladi-form-item-container {\n        text-transform: inherit;\n        text-decoration: inherit;\n        text-align: inherit;\n        letter-spacing: inherit;\n        color: inherit;\n        background-size: inherit;\n        background-attachment: inherit;\n        background-origin: inherit;\n      }\n      .ladi-form > [data-quantity="true"] .ladi-form-item-container {\n        overflow: hidden;\n      }\n      .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item {\n        text-transform: inherit;\n        text-decoration: inherit;\n        text-align: inherit;\n        letter-spacing: inherit;\n        color: inherit;\n      }\n      .ladi-form\n        > .ladi-element\n        .ladi-form-item-container\n        .ladi-form-item-background {\n        background-size: inherit;\n        background-attachment: inherit;\n        background-origin: inherit;\n      }\n      .ladi-form\n        > .ladi-element\n        .ladi-form-item-container\n        .ladi-form-item\n        .ladi-form-control-select {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        background-size: 9px 6px !important;\n        background-position: right 0.5rem center;\n        background-repeat: no-repeat;\n        padding-right: 24px;\n      }\n      .ladi-form\n        > .ladi-element\n        .ladi-form-item-container\n        .ladi-form-item\n        .ladi-form-control-select-2 {\n        width: calc(100% / 2 - 5px);\n        max-width: calc(100% / 2 - 5px);\n        min-width: calc(100% / 2 - 5px);\n      }\n      .ladi-form\n        > .ladi-element\n        .ladi-form-item-container\n        .ladi-form-item\n        .ladi-form-control-select-2:nth-child(3) {\n        margin-left: 7.5px;\n      }\n      .ladi-form\n        > .ladi-element\n        .ladi-form-item-container\n        .ladi-form-item\n        .ladi-form-control-select-3 {\n        width: calc(100% / 3 - 5px);\n        max-width: calc(100% / 3 - 5px);\n        min-width: calc(100% / 3 - 5px);\n      }\n      .ladi-form\n        > .ladi-element\n        .ladi-form-item-container\n        .ladi-form-item\n        .ladi-form-control-select-3:nth-child(3) {\n        margin-left: 7.5px;\n      }\n      .ladi-form\n        > .ladi-element\n        .ladi-form-item-container\n        .ladi-form-item\n        .ladi-form-control-select-3:nth-child(4) {\n        margin-left: 7.5px;\n      }\n      .ladi-form\n        > .ladi-element\n        .ladi-form-item-container\n        .ladi-form-item\n        .ladi-form-control-select\n        option {\n        color: initial;\n      }\n      .ladi-form\n        > .ladi-element\n        .ladi-form-item-container\n        .ladi-form-item\n        .ladi-form-control:not(.ladi-form-control-select) {\n        text-transform: inherit;\n        text-decoration: inherit;\n        text-align: inherit;\n        letter-spacing: inherit;\n        color: inherit;\n        background-size: inherit;\n        background-attachment: inherit;\n        background-origin: inherit;\n      }\n      .ladi-form\n        > .ladi-element\n        .ladi-form-item-container\n        .ladi-form-item\n        .ladi-form-control-select {\n        text-transform: inherit;\n        text-align: inherit;\n        letter-spacing: inherit;\n        color: inherit;\n        background-size: inherit;\n        background-attachment: inherit;\n        background-origin: inherit;\n      }\n      .ladi-form\n        > .ladi-element\n        .ladi-form-item-container\n        .ladi-form-item\n        .ladi-form-control-select:not([data-selected=""]) {\n        text-decoration: inherit;\n      }\n      .ladi-form\n        > .ladi-element\n        .ladi-form-item-container\n        .ladi-form-item\n        .ladi-form-checkbox-item {\n        text-transform: inherit;\n        text-decoration: inherit;\n        text-align: inherit;\n        letter-spacing: inherit;\n        color: inherit;\n        background-size: inherit;\n        background-attachment: inherit;\n        background-origin: inherit;\n        vertical-align: middle;\n      }\n      .ladi-form\n        > .ladi-element\n        .ladi-form-item-container\n        .ladi-form-item\n        .ladi-form-checkbox-box-item {\n        display: inline-block;\n        width: fit-content;\n      }\n      .ladi-form\n        > .ladi-element\n        .ladi-form-item-container\n        .ladi-form-item\n        .ladi-form-checkbox-item\n        span {\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n      }\n      .ladi-form\n        > .ladi-element\n        .ladi-form-item-container\n        .ladi-form-item\n        .ladi-form-checkbox-item\n        span[data-checked="true"] {\n        text-transform: inherit;\n        text-decoration: inherit;\n        text-align: inherit;\n        letter-spacing: inherit;\n        color: inherit;\n        background-size: inherit;\n        background-attachment: inherit;\n        background-origin: inherit;\n      }\n      .ladi-form\n        > .ladi-element\n        .ladi-form-item-container\n        .ladi-form-item\n        .ladi-form-checkbox-item\n        span[data-checked="false"] {\n        text-transform: inherit;\n        text-align: inherit;\n        letter-spacing: inherit;\n        color: inherit;\n        background-size: inherit;\n        background-attachment: inherit;\n        background-origin: inherit;\n      }\n      .ladi-form .ladi-form-item-container {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n      }\n      .ladi-form .ladi-form-item-title-value {\n        font-weight: bold;\n        word-break: break-word;\n      }\n      .ladi-form .ladi-form-label-container {\n        position: relative;\n        width: 100%;\n      }\n      .ladi-form .ladi-form-control-file {\n        background-repeat: no-repeat;\n        background-position: calc(100% - 5px) center;\n      }\n      .ladi-form .ladi-form-label-container .ladi-form-label-item {\n        display: inline-block;\n        cursor: pointer;\n        position: relative;\n        border-radius: 0px !important;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n      }\n      .ladi-form .ladi-form-label-container .ladi-form-label-item.image {\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n      }\n      .ladi-form .ladi-form-label-container .ladi-form-label-item.no-value {\n        display: none !important;\n      }\n      .ladi-form\n        .ladi-form-label-container\n        .ladi-form-label-item.text.disabled {\n        opacity: 0.35;\n      }\n      .ladi-form\n        .ladi-form-label-container\n        .ladi-form-label-item.image.disabled {\n        opacity: 0.2;\n      }\n      .ladi-form\n        .ladi-form-label-container\n        .ladi-form-label-item.color.disabled {\n        opacity: 0.15;\n      }\n      .ladi-form\n        .ladi-form-label-container\n        .ladi-form-label-item.selected:before {\n        content: "";\n        width: 0;\n        height: 0;\n        bottom: -1px;\n        right: -1px;\n        position: absolute;\n        border-width: 0 0 15px 15px;\n        border-color: transparent;\n        border-style: solid;\n      }\n      .ladi-form\n        .ladi-form-label-container\n        .ladi-form-label-item.selected:after {\n        content: "";\n        background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' enable-background=\'new 0 0 12 12\' viewBox=\'0 0 12 12\' x=\'0\' fill=\'%23fff\' y=\'0\'%3E%3Cg%3E%3Cpath d=\'m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z\'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");\n        background-repeat: no-repeat;\n        background-position: bottom right;\n        width: 7px;\n        height: 7px;\n        bottom: 0;\n        right: 0;\n        position: absolute;\n      }\n      .ladi-form .ladi-form-item {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n      }\n      .ladi-form .ladi-form-item-background {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        pointer-events: none;\n      }\n      .ladi-form .ladi-form-item.ladi-form-checkbox {\n        height: auto;\n      }\n      .ladi-form .ladi-form-item .ladi-form-control {\n        background-color: transparent;\n        min-width: 100%;\n        min-height: 100%;\n        max-width: 100%;\n        max-height: 100%;\n        width: 100%;\n        height: 100%;\n        padding: 0 5px;\n        color: inherit;\n        font-size: inherit;\n        border: none;\n      }\n      .ladi-form .ladi-form-item.ladi-form-checkbox {\n        padding: 0 5px;\n      }\n      .ladi-form\n        .ladi-form-item.ladi-form-checkbox.ladi-form-checkbox-vertical\n        .ladi-form-checkbox-item {\n        margin-top: 0 !important;\n        margin-left: 0 !important;\n        margin-right: 0 !important;\n        display: flex;\n        align-items: center;\n        border: none;\n      }\n      .ladi-form\n        .ladi-form-item.ladi-form-checkbox.ladi-form-checkbox-horizontal\n        .ladi-form-checkbox-item {\n        margin-top: 0 !important;\n        margin-left: 0 !important;\n        margin-right: 10px !important;\n        display: inline-flex;\n        align-items: center;\n        border: none;\n        position: relative;\n      }\n      .ladi-form\n        .ladi-form-item.ladi-form-checkbox\n        .ladi-form-checkbox-item\n        input {\n        margin-right: 5px;\n        display: block;\n      }\n      .ladi-form\n        .ladi-form-item.ladi-form-checkbox\n        .ladi-form-checkbox-item\n        span {\n        cursor: default;\n        word-break: break-word;\n      }\n      .ladi-form .ladi-form-item textarea.ladi-form-control {\n        resize: none;\n        padding: 5px;\n      }\n      .ladi-form .ladi-button {\n        cursor: pointer;\n      }\n      .ladi-form .ladi-button .ladi-headline {\n        cursor: pointer;\n        user-select: none;\n      }\n      .ladi-form .ladi-element .ladi-form-otp::-webkit-outer-spin-button,\n      .ladi-form .ladi-element .ladi-form-otp::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n      }\n      .ladi-form .ladi-element .ladi-form-item .button-get-code {\n        display: none;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        margin: auto 0;\n        line-height: initial;\n        padding: 5px 10px;\n        height: max-content;\n        cursor: pointer;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n      }\n      .ladi-form\n        .ladi-element\n        .ladi-form-item\n        .button-get-code.hide-visibility {\n        display: block !important;\n        visibility: hidden !important;\n      }\n      .ladi-form .ladi-form-item.otp-resend .button-get-code {\n        display: block;\n      }\n      .ladi-form .ladi-form-item.otp-countdown:before {\n        content: attr(data-countdown-time) "s";\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        margin: auto 0;\n        height: max-content;\n        line-height: initial;\n      }\n      .ladi-form [data-variant="true"] select option[disabled] {\n        background: #fff;\n        color: #b8b8b8 !important;\n      }\n      .ladi-google-recaptcha-checkbox {\n        position: absolute;\n        display: inline-block;\n        transform: translateY(-100%);\n        margin-top: -5px;\n        z-index: 90000010;\n      }\n      .ladi-form\n        > .ladi-element\n        .ladi-form-item-container\n        .ladi-form-item\n        .ladi-form-control-select {\n        background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2232%22%20height%3D%2224%22%20viewBox%3D%220%200%2032%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpolygon%20points%3D%220%2C0%2032%2C0%2016%2C24%22%20style%3D%22fill%3A%20rgb(0%2C%200%2C%200)%22%3E%3C%2Fpolygon%3E%3C%2Fsvg%3E");\n      }\n      .ladi-video {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        cursor: pointer;\n        overflow: hidden;\n      }\n      .ladi-video .ladi-video-background {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        pointer-events: none;\n      }\n      .button-unmute {\n        cursor: pointer;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        margin: auto;\n      }\n      .button-unmute div {\n        background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2036%2036%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22m%2021.48%2C17.98%20c%200%2C-1.77%20-1.02%2C-3.29%20-2.5%2C-4.03%20v%202.21%20l%202.45%2C2.45%20c%20.03%2C-0.2%20.05%2C-0.41%20.05%2C-0.63%20z%20m%202.5%2C0%20c%200%2C.94%20-0.2%2C1.82%20-0.54%2C2.64%20l%201.51%2C1.51%20c%20.66%2C-1.24%201.03%2C-2.65%201.03%2C-4.15%200%2C-4.28%20-2.99%2C-7.86%20-7%2C-8.76%20v%202.05%20c%202.89%2C.86%205%2C3.54%205%2C6.71%20z%20M%209.25%2C8.98%20l%20-1.27%2C1.26%204.72%2C4.73%20H%207.98%20v%206%20H%2011.98%20l%205%2C5%20v%20-6.73%20l%204.25%2C4.25%20c%20-0.67%2C.52%20-1.42%2C.93%20-2.25%2C1.18%20v%202.06%20c%201.38%2C-0.31%202.63%2C-0.95%203.69%2C-1.81%20l%202.04%2C2.05%201.27%2C-1.27%20-9%2C-9%20-7.72%2C-7.72%20z%20m%207.72%2C.99%20-2.09%2C2.08%202.09%2C2.09%20V%209.98%20z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");\n        width: 60px;\n        height: 60px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        margin: auto;\n        background-color: rgba(0, 0, 0, 0.5);\n        border-radius: 100%;\n        background-size: 90%;\n        background-repeat: no-repeat;\n        background-position: center center;\n      }\n      .ladi-group {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n      }\n      .ladi-shape {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        pointer-events: none;\n      }\n      .ladi-cart-number {\n        position: absolute;\n        top: -2px;\n        right: -7px;\n        background: #f36e36;\n        text-align: center;\n        width: 18px;\n        height: 18px;\n        line-height: 18px;\n        font-size: 12px;\n        font-weight: bold;\n        color: #fff;\n        border-radius: 100%;\n      }\n      .ladi-image {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n      .ladi-image .ladi-image-background {\n        background-repeat: no-repeat;\n        background-position: left top;\n        background-size: cover;\n        background-attachment: scroll;\n        background-origin: content-box;\n        position: absolute;\n        margin: 0 auto;\n        width: 100%;\n        height: 100%;\n        pointer-events: none;\n      }\n      .ladi-headline {\n        width: 100%;\n        display: inline-block;\n        word-break: break-word;\n        background-size: cover;\n        background-position: center center;\n      }\n      .ladi-headline a {\n        text-decoration: underline;\n      }\n      .ladi-paragraph {\n        width: 100%;\n        display: inline-block;\n        word-break: break-word;\n      }\n      .ladi-paragraph a {\n        text-decoration: underline;\n      }\n      .ladi-list-paragraph {\n        width: 100%;\n        display: inline-block;\n      }\n      .ladi-list-paragraph a {\n        text-decoration: underline;\n      }\n      .ladi-list-paragraph ul li {\n        position: relative;\n        counter-increment: linum;\n      }\n      .ladi-list-paragraph ul li:before {\n        position: absolute;\n        background-repeat: no-repeat;\n        background-size: 100% 100%;\n        left: 0;\n      }\n      .ladi-list-paragraph ul li:last-child {\n        padding-bottom: 0 !important;\n      }\n      .ladi-line {\n        position: relative;\n      }\n      .ladi-line .ladi-line-container {\n        border-bottom: 0 !important;\n        border-right: 0 !important;\n        width: 100%;\n        height: 100%;\n      }\n      a[data-action] {\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        cursor: pointer;\n      }\n      a:visited {\n        color: inherit;\n      }\n      a:link {\n        color: inherit;\n      }\n      [data-opacity="0"] {\n        opacity: 0;\n      }\n      [data-hidden="true"] {\n        display: none;\n      }\n      [data-action="true"] {\n        cursor: pointer;\n      }\n      .ladi-hidden {\n        display: none;\n      }\n      .ladi-animation-hidden {\n        visibility: hidden !important;\n        opacity: 0 !important;\n      }\n      .element-click-selected {\n        cursor: pointer;\n      }\n      .is-2nd-click {\n        cursor: pointer;\n      }\n      .ladi-button-shape.is-2nd-click,\n      .ladi-accordion-shape.is-2nd-click {\n        z-index: 1;\n      }\n      .backdrop-popup {\n        display: none;\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: 90000060;\n      }\n      .backdrop-dropbox {\n        display: none;\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: 90000040;\n      }\n      .ladi-lazyload {\n        background-image: none !important;\n      }\n      .ladi-list-paragraph ul li.ladi-lazyload:before {\n        background-image: none !important;\n      }\n      .ladi-carousel-fullwidth {\n        width: 100vw !important;\n        left: calc(-50vw + 50%) !important;\n        box-sizing: border-box !important;\n        transform: none !important;\n      }\n      .ladi-gallery-fullwidth {\n        width: 100vw !important;\n        left: calc(-50vw + 50%) !important;\n        box-sizing: border-box !important;\n        transform: none !important;\n      }\n      .ladi-gallery-fullwidth .ladi-gallery-view-item {\n        transition-duration: 1500ms;\n      }\n    ',
          }}
        />
        {/* <style
          type="text/css"
          id="style_animation"
          dangerouslySetInnerHTML={{
            __html:
              '\n      @media (min-width: 768px) {\n        #GROUP409,\n        #GROUP439,\n        #GROUP444,\n        #BUTTON460,\n        #GROUP491,\n        #LIST_PARAGRAPH506,\n        #GROUP510,\n        #GROUP523,\n        #GROUP532,\n        #GROUP546,\n        #LIST_PARAGRAPH573,\n        #GROUP574,\n        #GROUP405 {\n          opacity: 0 !important;\n          pointer-events: none !important;\n        }\n      }\n      @media (max-width: 767px) {\n        #BUTTON460,\n        #LIST_PARAGRAPH506,\n        #LIST_PARAGRAPH573,\n        #GROUP574 {\n          opacity: 0 !important;\n          pointer-events: none !important;\n        }\n      }\n    ',
          }}
        /> */}
        <style
          id="style_page"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n      body {\n        direction: ltr;\n      }\n      .ladi-section .ladi-container {\n        width: 960px;\n      }\n      body {\n        font-family: Montserrat, sans-serif;\n      }\n    ',
          }}
        />
        <style
          id="style_element"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n      #SECTION1 {\n        height: 657.56px;\n      }\n      #SECTION1 > .ladi-section-background {\n        background-image: url("https://w.ladicdn.com/s1440x657/5a20ac1db046b6df80924d6f/zsxarp1kbjwbxg9wrxxpjfr3n9igijgd7sknzuhg-1-20221202042613-3sfux.jpg");\n        background-size: cover;\n        background-origin: content-box;\n        background-position: 50% 0%;\n        background-repeat: repeat;\n        background-attachment: scroll;\n      }\n      #SECTION16 {\n        height: 685.9px;\n      }\n      #SECTION16 > .ladi-section-background,\n      #SECTION40 > .ladi-section-background,\n      #SECTION78 > .ladi-section-background,\n      #SECTION529 > .ladi-section-background,\n      #SECTION543 > .ladi-section-background {\n        background-image: linear-gradient(\n          rgb(255, 255, 255),\n          rgb(251, 251, 251)\n        );\n        background-color: initial;\n        background-size: initial;\n        background-origin: initial;\n        background-position: initial;\n        background-repeat: initial;\n        background-attachment: initial;\n      }\n      #SECTION16 > .ladi-section-background,\n      #SECTION2 > .ladi-section-background,\n      #SECTION40 > .ladi-section-background,\n      #SECTION74 > .ladi-section-background,\n      #SECTION78 > .ladi-section-background,\n      #SECTION529 > .ladi-section-background,\n      #SECTION543 > .ladi-section-background,\n      #BUTTON460 > .ladi-button > .ladi-button-background {\n        -webkit-background-clip: initial;\n      }\n      #IMAGE581,\n      #IMAGE581 > .ladi-image > .ladi-image-background,\n      #IMAGE26,\n      #IMAGE26 > .ladi-image > .ladi-image-background {\n        width: 156.228px;\n        height: 153.709px;\n      }\n      #IMAGE581 {\n        top: 492.231px;\n        left: 11px;\n      }\n      #IMAGE581 > .ladi-image > .ladi-image-background,\n      #IMAGE26 > .ladi-image > .ladi-image-background,\n      #IMAGE23,\n      #HEADLINE17,\n      #BOX488,\n      #HEADLINE492,\n      #IMAGE38 > .ladi-image > .ladi-image-background,\n      #IMAGE39 > .ladi-image > .ladi-image-background,\n      #HEADLINE29,\n      #HEADLINE511,\n      #HEADLINE71,\n      #IMAGE77,\n      #IMAGE82,\n      #HEADLINE524,\n      #HEADLINE83,\n      #IMAGE540 > .ladi-image > .ladi-image-background,\n      #IMAGE541 > .ladi-image > .ladi-image-background,\n      #IMAGE542 > .ladi-image > .ladi-image-background,\n      #IMAGE530 > .ladi-image > .ladi-image-background,\n      #IMAGE531 > .ladi-image > .ladi-image-background,\n      #HEADLINE533,\n      #IMAGE535 > .ladi-image > .ladi-image-background,\n      #IMAGE575 > .ladi-image > .ladi-image-background,\n      #IMAGE577 > .ladi-image > .ladi-image-background,\n      #IMAGE544 > .ladi-image > .ladi-image-background,\n      #IMAGE545 > .ladi-image > .ladi-image-background,\n      #HEADLINE547,\n      #POPUP455,\n      #BOX457,\n      #FORM_ITEM462 {\n        top: 0px;\n        left: 0px;\n      }\n      #IMAGE581 > .ladi-image > .ladi-image-background,\n      #IMAGE26 > .ladi-image > .ladi-image-background {\n        background-image: url("https://w.ladicdn.com/s500x500/5c7362c6c417ab07e5196b05/uo89o8-20210116071358.png");\n      }\n      #IMAGE581 > .ladi-image {\n        transform: rotate(-160deg);\n      }\n      #IMAGE581:hover > .ladi-image {\n        transform: rotate(0deg);\n        opacity: 1;\n      }\n      #GROUP405 {\n        width: 430.093px;\n        height: 479.517px;\n        top: 175.847px;\n        left: 60px;\n      }\n      #GROUP405.ladi-animation > .ladi-group {\n        animation-name: fadeInLeft;\n        animation-delay: 0.2s;\n        animation-duration: 1.5s;\n        animation-iteration-count: 1;\n      }\n      #IMAGE26 {\n        top: 11px;\n        left: 273.865px;\n      }\n      #IMAGE26:hover > .ladi-image,\n      #IMAGE23:hover > .ladi-image,\n      #HEADLINE17 > .ladi-headline:hover,\n      #PARAGRAPH20 > .ladi-paragraph:hover,\n      #BOX488 > .ladi-box:hover,\n      #SHAPE489:hover > .ladi-shape,\n      #HEADLINE492 > .ladi-headline:hover,\n      #BOX221 > .ladi-box:hover,\n      #BOX28 > .ladi-box:hover,\n      #BOX36 > .ladi-box:hover,\n      #PARAGRAPH30 > .ladi-paragraph:hover,\n      #IMAGE38:hover > .ladi-image,\n      #IMAGE39:hover > .ladi-image,\n      #HEADLINE29 > .ladi-headline:hover,\n      #BOX500 > .ladi-box:hover,\n      #LIST_PARAGRAPH506 > .ladi-list-paragraph:hover,\n      #HEADLINE511 > .ladi-headline:hover,\n      #BOX503 > .ladi-box:hover,\n      #BOX579 > .ladi-box:hover,\n      #BOX73 > .ladi-box:hover,\n      #IMAGE70:hover > .ladi-image,\n      #HEADLINE71 > .ladi-headline:hover,\n      #BOX41 > .ladi-box:hover,\n      #PARAGRAPH513 > .ladi-paragraph:hover,\n      #IMAGE77:hover > .ladi-image,\n      #BOX84 > .ladi-box:hover,\n      #PARAGRAPH75 > .ladi-paragraph:hover,\n      #IMAGE82:hover > .ladi-image,\n      #BOX85 > .ladi-box:hover,\n      #PARAGRAPH76 > .ladi-paragraph:hover,\n      #HEADLINE524 > .ladi-headline:hover,\n      #PARAGRAPH580 > .ladi-paragraph:hover,\n      #PARAGRAPH583 > .ladi-paragraph:hover,\n      #PARAGRAPH584 > .ladi-paragraph:hover,\n      #PARAGRAPH585 > .ladi-paragraph:hover,\n      #PARAGRAPH586 > .ladi-paragraph:hover,\n      #PARAGRAPH587 > .ladi-paragraph:hover,\n      #HEADLINE582 > .ladi-headline:hover,\n      #HEADLINE83 > .ladi-headline:hover,\n      #PARAGRAPH528 > .ladi-paragraph:hover,\n      #IMAGE540:hover > .ladi-image,\n      #IMAGE541:hover > .ladi-image,\n      #IMAGE542:hover > .ladi-image,\n      #IMAGE530:hover > .ladi-image,\n      #IMAGE531:hover > .ladi-image,\n      #HEADLINE533 > .ladi-headline:hover,\n      #IMAGE535:hover > .ladi-image,\n      #PARAGRAPH536 > .ladi-paragraph:hover,\n      #IMAGE575:hover > .ladi-image,\n      #BOX576 > .ladi-box:hover,\n      #IMAGE577:hover > .ladi-image,\n      #IMAGE544:hover > .ladi-image,\n      #IMAGE545:hover > .ladi-image,\n      #HEADLINE547 > .ladi-headline:hover,\n      #LIST_PARAGRAPH573 > .ladi-list-paragraph:hover,\n      #BOX457 > .ladi-box:hover,\n      #BUTTON460 > .ladi-button:hover,\n      #BUTTON_TEXT460 > .ladi-headline:hover,\n      #HEADLINE467 > .ladi-headline:hover {\n        opacity: 1;\n      }\n      #IMAGE23 {\n        width: 353.093px;\n        height: 479.517px;\n      }\n      #IMAGE23 > .ladi-image > .ladi-image-background {\n        width: 393.678px;\n        height: 590.517px;\n        top: -107px;\n        left: 4px;\n        background-image: url("https://w.ladicdn.com/s700x900/5a20ac1db046b6df80924d6f/mr_k9437-20221201034531-tcqqo.jpg");\n      }\n      #GROUP439,\n      #GROUP491 {\n        width: 524px;\n        height: 129px;\n      }\n      #GROUP439 {\n        top: 32.94px;\n        left: 218px;\n      }\n      #GROUP439.ladi-animation > .ladi-group,\n      #GROUP491.ladi-animation > .ladi-group,\n      #GROUP510.ladi-animation > .ladi-group,\n      #GROUP409.ladi-animation > .ladi-group,\n      #GROUP523.ladi-animation > .ladi-group,\n      #GROUP444.ladi-animation > .ladi-group,\n      #GROUP532.ladi-animation > .ladi-group,\n      #GROUP574.ladi-animation > .ladi-group,\n      #GROUP546.ladi-animation > .ladi-group {\n        animation-name: fadeInUp;\n        animation-delay: 0.2s;\n        animation-duration: 1.5s;\n        animation-iteration-count: 1;\n      }\n      #HEADLINE17,\n      #HEADLINE492,\n      #HEADLINE511 {\n        width: 524px;\n      }\n      #HEADLINE17 > .ladi-headline,\n      #HEADLINE492 > .ladi-headline,\n      #HEADLINE511 > .ladi-headline,\n      #HEADLINE71 > .ladi-headline,\n      #HEADLINE524 > .ladi-headline,\n      #HEADLINE83 > .ladi-headline,\n      #HEADLINE533 > .ladi-headline,\n      #HEADLINE547 > .ladi-headline {\n        font-family: "Playfair Display", serif;\n        font-size: 33px;\n        font-weight: bold;\n        line-height: 1.6;\n        color: rgb(194, 71, 47);\n        text-align: center;\n      }\n      #LINE396,\n      #LINE493,\n      #LINE512 {\n        width: 112px;\n      }\n      #LINE396,\n      #LINE493 {\n        top: 111px;\n        left: 206.061px;\n      }\n      #LINE396 > .ladi-line > .ladi-line-container,\n      #LINE493 > .ladi-line > .ladi-line-container,\n      #LINE512 > .ladi-line > .ladi-line-container,\n      #LINE395 > .ladi-line > .ladi-line-container,\n      #LINE525 > .ladi-line > .ladi-line-container,\n      #LINE397 > .ladi-line > .ladi-line-container,\n      #LINE534 > .ladi-line > .ladi-line-container,\n      #LINE548 > .ladi-line > .ladi-line-container {\n        border-top: 2px solid rgba(111, 111, 111, 0.2);\n        border-right: 2px solid rgba(111, 111, 111, 0.2);\n        border-bottom: 2px solid rgba(111, 111, 111, 0.2);\n        border-left: 0px !important;\n      }\n      #LINE396 > .ladi-line,\n      #LINE493 > .ladi-line,\n      #LINE37 > .ladi-line,\n      #LINE512 > .ladi-line,\n      #LINE395 > .ladi-line,\n      #LINE525 > .ladi-line,\n      #LINE397 > .ladi-line,\n      #LINE534 > .ladi-line,\n      #LINE548 > .ladi-line {\n        width: 100%;\n        padding: 8px 0px;\n      }\n      #PARAGRAPH20 {\n        width: 464px;\n        top: 215.94px;\n        left: 453px;\n      }\n      #PARAGRAPH20 > .ladi-paragraph,\n      #PARAGRAPH513 > .ladi-paragraph,\n      #PARAGRAPH528 > .ladi-paragraph,\n      #PARAGRAPH536 > .ladi-paragraph {\n        font-size: 20px;\n        line-height: 1.6;\n        color: rgb(54, 54, 54);\n        text-align: justify;\n      }\n      #SECTION482 {\n        height: 655px;\n      }\n      #SECTION482 > .ladi-section-background,\n      #SECTION494 > .ladi-section-background {\n        background-color: rgb(255, 252, 250);\n      }\n      #GROUP487,\n      #BOX488 {\n        width: 780px;\n        height: 452px;\n      }\n      #GROUP487 {\n        top: 144px;\n        left: 95px;\n      }\n      #BOX488 > .ladi-box,\n      #BOX221 > .ladi-box,\n      #IMAGE70 > .ladi-image,\n      #BOX41 > .ladi-box,\n      #POPUP455 > .ladi-popup > .ladi-overlay,\n      #POPUP455 > .ladi-popup > .ladi-popup-background,\n      #POPUP455 > .ladi-popup,\n      #BOX457 > .ladi-box {\n        border-radius: 6px;\n      }\n      #BOX488 > .ladi-box {\n        background-color: rgb(218, 218, 218);\n      }\n      #VIDEO489 {\n        width: 752px;\n        height: 425px;\n        top: 13px;\n        left: 13px;\n      }\n      #VIDEO489 > .ladi-video > .ladi-video-background {\n        background-image: url("https://img.youtube.com/vi/Zj1SKwVv7AA/hqdefault.jpg");\n        background-size: cover;\n        background-origin: content-box;\n        background-position: 50% 50%;\n        background-repeat: no-repeat;\n        background-attachment: scroll;\n      }\n      #SHAPE489 {\n        width: 60px;\n        height: 60px;\n        top: 182.5px;\n        left: 346px;\n      }\n      #SHAPE489 svg:last-child {\n        fill: rgba(0, 0, 0, 0.5);\n      }\n      #GROUP491 {\n        top: 15px;\n        left: 218px;\n      }\n      #SECTION2 {\n        height: 679.208px;\n      }\n      #SECTION2 > .ladi-section-background,\n      #SECTION74 > .ladi-section-background {\n        background-image: linear-gradient(\n          rgb(251, 251, 251),\n          rgb(255, 255, 255)\n        );\n        background-color: initial;\n        background-size: initial;\n        background-origin: initial;\n        background-position: initial;\n        background-repeat: initial;\n        background-attachment: initial;\n      }\n      #BOX221 {\n        width: 960px;\n        height: 669.335px;\n        top: 9.873px;\n        left: 0px;\n      }\n      #BOX221 > .ladi-box,\n      #BOX500 > .ladi-box,\n      #BOX41 > .ladi-box,\n      #FORM458 .ladi-form-item-background {\n        background-color: rgb(255, 255, 255);\n      }\n      #BOX221 > .ladi-box,\n      #BOX41 > .ladi-box {\n        box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 30px -10px;\n      }\n      #GALLERY35 {\n        width: 362.337px;\n        height: 606.858px;\n        top: 72.35px;\n        left: 545.5px;\n      }\n      #GALLERY35 > .ladi-gallery > .ladi-gallery-view {\n        height: calc(100% - 85px);\n      }\n      #GALLERY35 > .ladi-gallery > .ladi-gallery-control {\n        height: 80px;\n      }\n      #GALLERY35\n        > .ladi-gallery\n        > .ladi-gallery-control\n        > .ladi-gallery-control-box\n        > .ladi-gallery-control-item {\n        width: 80px;\n        height: 80px;\n        margin-right: 5px;\n      }\n      #GALLERY35 .ladi-gallery .ladi-gallery-view-item[data-index="0"] {\n        background-image: url("https://w.ladicdn.com/s700x950/5a20ac1db046b6df80924d6f/dam-2-20240511034307-tee3w.jpeg");\n      }\n      #GALLERY35 .ladi-gallery .ladi-gallery-control-item[data-index="0"] {\n        background-image: url("https://w.ladicdn.com/s400x400/5a20ac1db046b6df80924d6f/dam-2-20240511034307-tee3w.jpeg");\n      }\n      #GALLERY35 .ladi-gallery .ladi-gallery-view-item[data-index="1"] {\n        background-image: url("https://w.ladicdn.com/s700x950/5a20ac1db046b6df80924d6f/dam-3-20240511034307-vk5ve.jpeg");\n      }\n      #GALLERY35 .ladi-gallery .ladi-gallery-control-item[data-index="1"] {\n        background-image: url("https://w.ladicdn.com/s400x400/5a20ac1db046b6df80924d6f/dam-3-20240511034307-vk5ve.jpeg");\n      }\n      #GALLERY35 .ladi-gallery .ladi-gallery-view-item[data-index="2"] {\n        background-image: url("https://w.ladicdn.com/s700x950/5a20ac1db046b6df80924d6f/dam-1-20240511034307-u97aq.jpeg");\n      }\n      #GALLERY35 .ladi-gallery .ladi-gallery-control-item[data-index="2"] {\n        background-image: url("https://w.ladicdn.com/s400x400/5a20ac1db046b6df80924d6f/dam-1-20240511034307-u97aq.jpeg");\n      }\n      #GALLERY35 .ladi-gallery .ladi-gallery-view-item[data-index="3"] {\n        background-image: url("https://w.ladicdn.com/s700x950/5a20ac1db046b6df80924d6f/dam-4-20240511034307-96d3u.jpeg");\n      }\n      #GALLERY35 .ladi-gallery .ladi-gallery-control-item[data-index="3"] {\n        background-image: url("https://w.ladicdn.com/s400x400/5a20ac1db046b6df80924d6f/dam-4-20240511034307-96d3u.jpeg");\n      }\n      #GALLERY35 .ladi-gallery .ladi-gallery-view-item[data-index="4"] {\n        background-image: url("https://w.ladicdn.com/s700x950/5a20ac1db046b6df80924d6f/dam-5-20240511034307-sb-rr.jpeg");\n      }\n      #GALLERY35 .ladi-gallery .ladi-gallery-control-item[data-index="4"] {\n        background-image: url("https://w.ladicdn.com/s400x400/5a20ac1db046b6df80924d6f/dam-5-20240511034307-sb-rr.jpeg");\n      }\n      #GALLERY35 .ladi-gallery .ladi-gallery-view-item[data-index="5"] {\n        background-image: url("https://w.ladicdn.com/s700x950/5a20ac1db046b6df80924d6f/dam-6-20240511034307-dwsgb.jpeg");\n      }\n      #GALLERY35 .ladi-gallery .ladi-gallery-control-item[data-index="5"] {\n        background-image: url("https://w.ladicdn.com/s400x400/5a20ac1db046b6df80924d6f/dam-6-20240511034307-dwsgb.jpeg");\n      }\n      #GALLERY35 .ladi-gallery .ladi-gallery-view-item[data-index="6"] {\n        background-image: url("https://w.ladicdn.com/s700x950/5a20ac1db046b6df80924d6f/dam-7-20240511034307-8rgwv.jpeg");\n      }\n      #GALLERY35 .ladi-gallery .ladi-gallery-control-item[data-index="6"] {\n        background-image: url("https://w.ladicdn.com/s400x400/5a20ac1db046b6df80924d6f/dam-7-20240511034307-8rgwv.jpeg");\n      }\n      #GALLERY35 .ladi-gallery .ladi-gallery-view-item[data-index="7"] {\n        background-image: url("https://w.ladicdn.com/s700x950/5a20ac1db046b6df80924d6f/dam-8-20240511034307-l-mjq.jpeg");\n      }\n      #GALLERY35 .ladi-gallery .ladi-gallery-control-item[data-index="7"] {\n        background-image: url("https://w.ladicdn.com/s400x400/5a20ac1db046b6df80924d6f/dam-8-20240511034307-l-mjq.jpeg");\n      }\n      #BOX28 {\n        width: 484px;\n        height: 606.858px;\n        top: 72.35px;\n        left: 49px;\n      }\n      #BOX28 > .ladi-box,\n      #BOX457 > .ladi-box {\n        background-color: rgb(194, 71, 47);\n      }\n      #BOX36 {\n        width: 454px;\n        height: 518px;\n        top: 85.5405px;\n        left: 65px;\n      }\n      #BOX36 > .ladi-box {\n        border-width: 1px;\n        border-style: solid;\n        border-color: rgba(252, 201, 192, 0.2);\n      }\n      #PARAGRAPH30 {\n        width: 429px;\n        top: 198.85px;\n        left: 77.5px;\n      }\n      #PARAGRAPH30 > .ladi-paragraph {\n        font-size: 19px;\n        line-height: 1.6;\n        color: rgb(255, 255, 255);\n        text-align: justify;\n      }\n      #IMAGE38,\n      #IMAGE38 > .ladi-image > .ladi-image-background {\n        width: 99.1486px;\n        height: 39.3249px;\n      }\n      #IMAGE38 {\n        top: 626.85px;\n        left: 422.351px;\n      }\n      #IMAGE38 > .ladi-image > .ladi-image-background,\n      #IMAGE39 > .ladi-image > .ladi-image-background {\n        background-image: url("https://w.ladicdn.com/s400x350/5c7362c6c417ab07e5196b05/gnhdghdtr-20210116070353.png");\n      }\n      #IMAGE39,\n      #IMAGE39 > .ladi-image > .ladi-image-background {\n        width: 86.5423px;\n        height: 34.3249px;\n      }\n      #IMAGE39 {\n        top: 94.35px;\n        left: 88.458px;\n      }\n      #GROUP407 {\n        width: 375px;\n        height: 109px;\n        top: 118.35px;\n        left: 104.5px;\n      }\n      #LINE37,\n      #LINE395,\n      #LINE525,\n      #LINE397,\n      #LINE534,\n      #LINE548 {\n        width: 98px;\n      }\n      #LINE37 {\n        top: 55px;\n        left: 131.989px;\n      }\n      #LINE37 > .ladi-line > .ladi-line-container {\n        border-top: 2px solid rgba(252, 201, 192, 0.2);\n        border-right: 2px solid rgba(252, 201, 192, 0.2);\n        border-bottom: 2px solid rgba(252, 201, 192, 0.2);\n        border-left: 0px !important;\n      }\n      #HEADLINE29 {\n        width: 375px;\n      }\n      #HEADLINE29 > .ladi-headline {\n        font-family: "Playfair Display", serif;\n        font-size: 34px;\n        font-weight: bold;\n        line-height: 1.6;\n        color: rgb(255, 255, 255);\n        text-align: center;\n      }\n      #SECTION494 {\n        height: 823.5px;\n      }\n      #BOX500 {\n        width: 909px;\n        height: 733.25px;\n        top: 64.75px;\n        left: 25.5px;\n      }\n      #BOX500 > .ladi-box {\n        border-width: 2px;\n        border-radius: 8px;\n        border-style: solid;\n        border-color: rgba(182, 66, 111, 0.4);\n      }\n      #LIST_PARAGRAPH506 {\n        width: 499px;\n        top: 165.25px;\n        left: 45px;\n      }\n      #LIST_PARAGRAPH506 > .ladi-list-paragraph,\n      #PARAGRAPH580 > .ladi-paragraph,\n      #LIST_PARAGRAPH573 > .ladi-list-paragraph {\n        font-size: 20px;\n        line-height: 1.6;\n        color: rgb(0, 0, 0);\n        text-align: justify;\n      }\n      #LIST_PARAGRAPH506.ladi-animation > .ladi-list-paragraph,\n      #LIST_PARAGRAPH573.ladi-animation > .ladi-list-paragraph {\n        animation-name: bounceInLeft;\n        animation-delay: 0.2s;\n        animation-duration: 1s;\n        animation-iteration-count: 1;\n      }\n      #LIST_PARAGRAPH506 ul li,\n      #LIST_PARAGRAPH573 ul li {\n        padding-bottom: 12px;\n        padding-left: 0px;\n      }\n      #LIST_PARAGRAPH506 ul li:before,\n      #LIST_PARAGRAPH573 ul li:before {\n        top: 4px;\n        font-size: 14px;\n        color: rgb(235, 102, 151);\n        content: counter(linum, none);\n      }\n      #GROUP510 {\n        width: 524px;\n        height: 71px;\n        top: 83.75px;\n        left: 32.5px;\n      }\n      #LINE512 {\n        top: 53px;\n        left: 206px;\n      }\n      #BOX503,\n      #BOX579 {\n        width: 292.519px;\n        height: 353.75px;\n      }\n      #BOX503 {\n        top: 74.75px;\n        left: 563.753px;\n      }\n      #BOX503 > .ladi-box,\n      #BOX579 > .ladi-box,\n      #BOX576 > .ladi-box {\n        border-radius: 7px;\n      }\n      #BOX503 > .ladi-box {\n        background-image: url("https://w.ladicdn.com/s600x700/5a20ac1db046b6df80924d6f/dam-10-20240511034743-itl2c.jpeg");\n        background-size: cover;\n        background-origin: content-box;\n        background-position: 50% 0%;\n        background-repeat: repeat;\n        background-attachment: scroll;\n      }\n      #BOX579 {\n        top: 437.25px;\n        left: 630.981px;\n      }\n      #BOX579 > .ladi-box {\n        background-image: url("https://w.ladicdn.com/s600x700/5a20ac1db046b6df80924d6f/dam-9-20240511034743-oo6lr.jpeg");\n        background-size: cover;\n        background-origin: content-box;\n        background-position: 50% 0%;\n        background-repeat: repeat;\n        background-attachment: scroll;\n      }\n      #SECTION40 {\n        height: 700.208px;\n      }\n      #BOX73 {\n        width: 960px;\n        height: 544.868px;\n        top: 155.34px;\n        left: 0px;\n      }\n      #BOX73 > .ladi-box {\n        border-radius: 10px;\n        background-color: rgb(244, 244, 244);\n      }\n      #IMAGE70 {\n        width: 356.58px;\n        height: 499.5px;\n        top: 178.026px;\n        left: 25.5px;\n      }\n      #IMAGE70 > .ladi-image > .ladi-image-background {\n        width: 406.076px;\n        height: 534.394px;\n        top: -1.99401px;\n        left: -11.3712px;\n        background-image: url("https://w.ladicdn.com/s750x850/5a20ac1db046b6df80924d6f/dam-7-20240511034307-8rgwv.jpeg");\n      }\n      #GROUP409 {\n        width: 514px;\n        height: 124px;\n        top: 21.34px;\n        left: 223px;\n      }\n      #HEADLINE71,\n      #HEADLINE524 {\n        width: 514px;\n      }\n      #LINE395 {\n        top: 106px;\n        left: 208px;\n      }\n      #BOX41 {\n        width: 557px;\n        height: 480px;\n        top: 187.776px;\n        left: 387.764px;\n      }\n      #PARAGRAPH513 {\n        width: 511px;\n        top: 219.776px;\n        left: 410.764px;\n      }\n      #SECTION74 {\n        height: 175.9px;\n      }\n      #GROUP415,\n      #IMAGE77,\n      #GROUP414,\n      #IMAGE82 {\n        width: 461.917px;\n        height: 109.956px;\n      }\n      #GROUP415 {\n        top: 28.962px;\n        left: 0px;\n      }\n      #IMAGE77 > .ladi-image > .ladi-overlay,\n      #IMAGE82 > .ladi-image > .ladi-overlay {\n        background-color: rgba(143, 43, 37, 0.8);\n      }\n      #IMAGE77 > .ladi-image > .ladi-image-background,\n      #IMAGE82 > .ladi-image > .ladi-image-background {\n        width: 1163px;\n        height: 1331.59px;\n        top: -820px;\n        left: 0px;\n      }\n      #IMAGE77 > .ladi-image > .ladi-image-background {\n        background-image: url("https://w.ladicdn.com/s1500x1650/5c7362c6c417ab07e5196b05/do-tuoi-20210116084247-20210125094246.jpg");\n      }\n      #BOX84,\n      #BOX85 {\n        width: 443px;\n        height: 91px;\n      }\n      #BOX84 {\n        top: 9.478px;\n        left: 9.917px;\n      }\n      #BOX84 > .ladi-box,\n      #BOX85 > .ladi-box {\n        border-width: 2px;\n        border-style: solid;\n        border-color: rgba(255, 192, 181, 0.2);\n      }\n      #PARAGRAPH75 {\n        width: 428px;\n        top: 35.978px;\n        left: 17.4585px;\n      }\n      #PARAGRAPH75 > .ladi-paragraph,\n      #PARAGRAPH76 > .ladi-paragraph {\n        font-size: 24px;\n        font-weight: bold;\n        line-height: 1.6;\n        color: rgb(255, 255, 255);\n        text-align: center;\n      }\n      #GROUP414 {\n        top: 28.962px;\n        left: 499.083px;\n      }\n      #IMAGE82 > .ladi-image > .ladi-image-background {\n        background-image: url("https://w.ladicdn.com/s1500x1650/5c7362c6c417ab07e5196b05/yy7iur67-20210116074038-20210125093944.jpg");\n      }\n      #BOX85 {\n        top: 9.478px;\n        left: 9.459px;\n      }\n      #PARAGRAPH76 {\n        width: 330px;\n        top: 35.978px;\n        left: 65.9585px;\n      }\n      #SECTION514 {\n        height: 1958.73px;\n      }\n      #GALLERY515 {\n        width: 960px;\n        height: 818px;\n        top: 153.232px;\n        left: 0px;\n      }\n      #GALLERY515 > .ladi-gallery > .ladi-gallery-view {\n        height: calc(100% + 0px);\n      }\n      #GALLERY515 > .ladi-gallery > .ladi-gallery-control,\n      #SECTION_POPUP {\n        height: 0px;\n      }\n      #GALLERY515 > .ladi-gallery > .ladi-gallery-control {\n        display: none;\n      }\n      #GALLERY515\n        > .ladi-gallery\n        > .ladi-gallery-control\n        > .ladi-gallery-control-box\n        > .ladi-gallery-control-item {\n        width: 0px;\n        height: 0px;\n        margin-right: 0px;\n      }\n      #GALLERY515 .ladi-gallery .ladi-gallery-view-item[data-index="0"] {\n        background-image: url("https://w.ladicdn.com/s1300x1150/5cf2611dd062e8345a260cd8/143790750_914727782612531_8890345764816154305_n-20210129072545-20220820094257.jpg");\n      }\n      #GALLERY515 .ladi-gallery .ladi-gallery-control-item[data-index="0"] {\n        background-image: url("https://w.ladicdn.com/s400x400/5cf2611dd062e8345a260cd8/143790750_914727782612531_8890345764816154305_n-20210129072545-20220820094257.jpg");\n      }\n      #GROUP523 {\n        width: 514px;\n        height: 127px;\n        top: 16px;\n        left: 223px;\n      }\n      #LINE525 {\n        top: 110px;\n        left: 208px;\n      }\n      #PARAGRAPH580 {\n        width: 906px;\n        top: 993.73px;\n        left: 27px;\n      }\n      #PARAGRAPH583 {\n        width: 651px;\n        top: 1151.73px;\n        left: 15.9124px;\n      }\n      #PARAGRAPH583 > .ladi-paragraph,\n      #PARAGRAPH585 > .ladi-paragraph,\n      #PARAGRAPH587 > .ladi-paragraph {\n        font-size: 16px;\n        line-height: 1.6;\n        color: rgb(0, 0, 0);\n      }\n      #PARAGRAPH584 {\n        width: 396px;\n        top: 1107.73px;\n        left: 7px;\n      }\n      #PARAGRAPH584 > .ladi-paragraph,\n      #PARAGRAPH586 > .ladi-paragraph {\n        font-size: 18px;\n        line-height: 1.6;\n        color: rgb(0, 0, 0);\n      }\n      #PARAGRAPH585 {\n        width: 950px;\n        top: 1285.73px;\n        left: 15.9124px;\n      }\n      #PARAGRAPH586 {\n        width: 156px;\n        top: 1243.73px;\n        left: 7px;\n      }\n      #PARAGRAPH587 {\n        width: 951px;\n        top: 1830.73px;\n        left: 15.4124px;\n      }\n      #HEADLINE582 {\n        width: 198px;\n        top: 1787px;\n        left: 7px;\n      }\n      #HEADLINE582 > .ladi-headline {\n        font-size: 18px;\n        font-weight: bold;\n        line-height: 1.6;\n        color: rgb(0, 0, 0);\n        text-align: left;\n      }\n      #SECTION78 {\n        height: 853.788px;\n      }\n      #GROUP444 {\n        width: 624px;\n        height: 106px;\n        top: 12.54px;\n        left: 168px;\n      }\n      #HEADLINE83,\n      #HEADLINE533,\n      #HEADLINE547 {\n        width: 624px;\n      }\n      #LINE397,\n      #LINE534,\n      #LINE548 {\n        top: 54.662px;\n        left: 263px;\n      }\n      #PARAGRAPH528 {\n        width: 909px;\n        top: 92.788px;\n        left: 25.5px;\n      }\n      #CAROUSEL539 {\n        width: 960px;\n        height: 520px;\n        top: 333.788px;\n        left: 0px;\n      }\n      #IMAGE540,\n      #IMAGE540 > .ladi-image > .ladi-image-background,\n      #IMAGE541,\n      #IMAGE541 > .ladi-image > .ladi-image-background {\n        width: 309.048px;\n        height: 511.172px;\n      }\n      #IMAGE540 {\n        top: 0px;\n        left: -1px;\n      }\n      #IMAGE540 > .ladi-image > .ladi-image-background {\n        background-image: url("https://w.ladicdn.com/s650x850/5a20ac1db046b6df80924d6f/mr_k5281-20221201034735-5mgxx.jpg");\n      }\n      #IMAGE541 {\n        top: 0px;\n        left: 319.466px;\n      }\n      #IMAGE541 > .ladi-image > .ladi-image-background {\n        background-image: url("https://w.ladicdn.com/s650x850/5a20ac1db046b6df80924d6f/mr_k9468-20221201034623-gandr.jpg");\n      }\n      #IMAGE542 {\n        width: 309px;\n        height: 511px;\n        top: 0px;\n        left: 640.84px;\n      }\n      #IMAGE542 > .ladi-image > .ladi-image-background {\n        width: 309px;\n        height: 511.172px;\n        background-image: url("https://w.ladicdn.com/s650x850/5a20ac1db046b6df80924d6f/screenshot-2022-11-30-164948-20221130094959-t0ok8.png");\n      }\n      #SECTION529 {\n        height: 1218.28px;\n      }\n      #IMAGE530,\n      #IMAGE530 > .ladi-image > .ladi-image-background,\n      #IMAGE544,\n      #IMAGE544 > .ladi-image > .ladi-image-background {\n        width: 153.168px;\n        height: 58.8707px;\n      }\n      #IMAGE530 {\n        top: 429.297px;\n        left: -143.168px;\n      }\n      #IMAGE530 > .ladi-image > .ladi-image-background,\n      #IMAGE544 > .ladi-image > .ladi-image-background {\n        background-image: url("https://w.ladicdn.com/s500x400/5c7362c6c417ab07e5196b05/sdrbgsreg-20210116070353.png");\n      }\n      #IMAGE531,\n      #IMAGE531 > .ladi-image > .ladi-image-background,\n      #IMAGE545,\n      #IMAGE545 > .ladi-image > .ladi-image-background {\n        width: 124.361px;\n        height: 49.3249px;\n      }\n      #IMAGE531 {\n        top: 26.877px;\n        left: 824.639px;\n      }\n      #IMAGE531 > .ladi-image > .ladi-image-background,\n      #IMAGE545 > .ladi-image > .ladi-image-background {\n        background-image: url("https://w.ladicdn.com/s450x350/5c7362c6c417ab07e5196b05/gnhdghdtr-20210116070353.png");\n      }\n      #GROUP532,\n      #GROUP546 {\n        width: 624px;\n        height: 72.662px;\n      }\n      #GROUP532 {\n        top: 26.877px;\n        left: 168px;\n      }\n      #IMAGE535,\n      #IMAGE535 > .ladi-image > .ladi-image-background {\n        width: 960px;\n        height: 819.112px;\n      }\n      #IMAGE535 {\n        top: 399.168px;\n        left: 0px;\n      }\n      #IMAGE535 > .ladi-image > .ladi-image-background {\n        background-image: url("https://w.ladicdn.com/s1300x1150/5a20ac1db046b6df80924d6f/screenshot_142-20221202053816-xvsyy.png");\n      }\n      #PARAGRAPH536 {\n        width: 938px;\n        top: 104.788px;\n        left: 11px;\n      }\n      #SECTION543 {\n        height: 891.75px;\n      }\n      #GROUP574 {\n        width: 555.996px;\n        height: 657.608px;\n        top: 102.61px;\n        left: 498.989px;\n      }\n      #IMAGE575,\n      #IMAGE575 > .ladi-image > .ladi-image-background {\n        width: 272.979px;\n        height: 211.44px;\n      }\n      #IMAGE575 {\n        top: 0px;\n        left: 283.017px;\n      }\n      #IMAGE575 > .ladi-image > .ladi-image-background {\n        background-image: url("https://w.ladicdn.com/s600x550/5c7362c6c417ab07e5196b05/avw4t-20200914092556.png");\n      }\n      #BOX576 {\n        width: 430.612px;\n        height: 520.75px;\n        top: 82.89px;\n        left: 30.399px;\n      }\n      #BOX576 > .ladi-box {\n        background-image: url("https://w.ladicdn.com/s750x850/5a20ac1db046b6df80924d6f/36-1-20240511040346-isq7v.jpg");\n        background-size: cover;\n        background-origin: content-box;\n        background-position: 50% 0%;\n        background-repeat: repeat;\n        background-attachment: scroll;\n      }\n      #IMAGE577,\n      #IMAGE577 > .ladi-image > .ladi-image-background {\n        width: 124.716px;\n        height: 140.536px;\n      }\n      #IMAGE577 {\n        top: 517.072px;\n        left: 0px;\n      }\n      #IMAGE577 > .ladi-image > .ladi-image-background {\n        background-image: url("https://w.ladicdn.com/s450x450/5c7362c6c417ab07e5196b05/sdvfawe-20200914092556.png");\n      }\n      #IMAGE544 {\n        top: 804.297px;\n        left: -107.168px;\n      }\n      #IMAGE545 {\n        top: 102.61px;\n        left: 755px;\n      }\n      #GROUP546 {\n        top: 21.54px;\n        left: 168px;\n      }\n      #LIST_PARAGRAPH573 {\n        width: 494px;\n        top: 152.75px;\n        left: 12.5px;\n      }\n      #POPUP455 {\n        width: 386.943px;\n        height: 513px;\n        right: 0px;\n        bottom: 0px;\n        margin: auto;\n      }\n      #POPUP455 > .ladi-popup > .ladi-popup-background {\n        background-color: rgb(255, 246, 245);\n      }\n      #GROUP456,\n      #BOX457 {\n        width: 365px;\n        height: 493.884px;\n      }\n      #GROUP456 {\n        top: 9.058px;\n        left: 10.4688px;\n      }\n      #FORM458 {\n        width: 287px;\n        height: 377px;\n        top: 80.35px;\n        left: 39px;\n      }\n      #FORM458 > .ladi-form {\n        font-size: 14px;\n        line-height: 1.6;\n        color: rgb(0, 0, 0);\n      }\n      #FORM458\n        .ladi-form\n        .ladi-form-item.ladi-form-checkbox\n        .ladi-form-checkbox-item\n        span[data-checked="false"],\n      #FORM458\n        .ladi-form\n        .ladi-form-item.ladi-form-checkbox\n        .ladi-form-checkbox-item\n        .ladi-editing,\n      #FORM458\n        .ladi-form\n        .ladi-form-item.ladi-form-checkbox\n        .ladi-form-checkbox-item\n        .ladi-editing::placeholder,\n      #FORM458 .ladi-form .ladi-survey-option .ladi-survey-option-label,\n      #FORM458 .ladi-form-item .ladi-form-control::placeholder,\n      #FORM458 .ladi-form-item select.ladi-form-control[data-selected=""] {\n        color: rgb(0, 0, 0);\n      }\n      #FORM458 .ladi-form-item {\n        padding-left: 9px;\n        padding-right: 9px;\n      }\n      #FORM458 .ladi-form-item.otp-countdown:before {\n        right: 14px;\n      }\n      #FORM458 .ladi-form-item.ladi-form-checkbox {\n        padding-left: 14px;\n        padding-right: 14px;\n      }\n      #FORM458 .ladi-survey-option {\n        text-align: left;\n      }\n      #FORM458 .ladi-form-item-container,\n      #FORM458 .ladi-form-label-container .ladi-form-label-item {\n        border-width: 1px;\n        border-color: rgb(238, 238, 238);\n      }\n      #FORM458 .ladi-form-item-container .ladi-form-item.ladi-form-quantity {\n        width: calc(100% + 1px);\n      }\n      #FORM458 .ladi-form-item-container .ladi-form-quantity .button {\n        background-color: rgb(238, 238, 238);\n      }\n      #FORM_ITEM459,\n      #FORM_ITEM462,\n      #FORM_ITEM463,\n      #FORM_ITEM464,\n      #FORM_ITEM465 {\n        width: 287px;\n        height: 45px;\n      }\n      #FORM_ITEM459 {\n        top: 201px;\n        left: 0px;\n      }\n      #BUTTON460 {\n        width: 194.6px;\n        height: 48px;\n        top: 329px;\n        left: 46.2px;\n      }\n      #BUTTON460 > .ladi-button > .ladi-button-background {\n        background-image: linear-gradient(rgb(255, 223, 89), rgb(255, 132, 1));\n        background-color: initial;\n        background-size: initial;\n        background-origin: initial;\n        background-position: initial;\n        background-repeat: initial;\n        background-attachment: initial;\n      }\n      #BUTTON460 > .ladi-button {\n        border-radius: 1000px;\n        box-shadow: rgb(85, 17, 13) 0px 15px 25px -15px;\n      }\n      #BUTTON460.ladi-animation > .ladi-button {\n        animation-name: pulse;\n        animation-delay: 0.2s;\n        animation-duration: 1s;\n        animation-iteration-count: infinite;\n      }\n      #BUTTON_TEXT460 {\n        width: 195px;\n        top: 9px;\n        left: 0px;\n      }\n      #BUTTON_TEXT460 > .ladi-headline {\n        font-size: 16px;\n        font-weight: bold;\n        line-height: 1.6;\n        color: rgb(85, 17, 13);\n        text-align: center;\n      }\n      #FORM_ITEM463 {\n        top: 50.25px;\n        left: 0px;\n      }\n      #FORM_ITEM464 {\n        top: 100.5px;\n        left: 0px;\n      }\n      #FORM_ITEM465 {\n        top: 150.75px;\n        left: 0px;\n      }\n      #FORM_ITEM466 {\n        width: 287px;\n        height: 66px;\n        top: 251px;\n        left: 0px;\n      }\n      #HEADLINE467 {\n        width: 276px;\n        top: 31px;\n        left: 44.5px;\n      }\n      #HEADLINE467 > .ladi-headline {\n        font-size: 21px;\n        font-weight: bold;\n        line-height: 1.6;\n        color: rgb(255, 255, 255);\n        text-align: center;\n      }\n    ',
          }}
        />
        <style
          id="style_lazyload"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n      body.lazyload .ladi-overlay,\n      body.lazyload .ladi-box,\n      body.lazyload .ladi-button-background,\n      body.lazyload .ladi-collection-item:before,\n      body.lazyload .ladi-countdown-background,\n      body.lazyload .ladi-form-item-background,\n      body.lazyload .ladi-form-label-container .ladi-form-label-item.image,\n      body.lazyload .ladi-frame-background,\n      body.lazyload .ladi-gallery-view-item,\n      body.lazyload .ladi-gallery-control-item,\n      body.lazyload .ladi-headline,\n      body.lazyload .ladi-image-background,\n      body.lazyload .ladi-image-compare,\n      body.lazyload .ladi-list-paragraph ul li:before,\n      body.lazyload .ladi-section-background,\n      body.lazyload .ladi-survey-option-background,\n      body.lazyload .ladi-survey-option-image,\n      body.lazyload .ladi-tabs-background,\n      body.lazyload .ladi-video-background,\n      body.lazyload .ladi-banner,\n      body.lazyload .ladi-spin-lucky-screen,\n      body.lazyload .ladi-spin-lucky-start {\n        background-image: none !important;\n      }\n    ',
          }}
        />
        <link
          rel="stylesheet"
          href="https://thieuhoa.com.vn/v2/css/hompage.css?id=d2c2017abfe47c7c98e7"
        />
        <link
          rel="stylesheet"
          href="https://thieuhoa.com.vn/v2/css/style.css?id=f908cecd27c333803a4a"
        />
        <link
          rel="stylesheet"
          href="https://thieuhoa.com.vn/v2/css/custom.css?id=d0f98e91ae8b396b9e10"
        />
        <link
          rel="stylesheet"
          href="https://thieuhoa.com.vn/v2/css/override.css?id=d4272a4d6e8bfcc3cf2a"
        />
        <link rel="stylesheet" href="https://thieuhoa.com.vn/css/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n      #content-pay\n        .main-content-pay\n        .left-content-pay\n        .payment-methods\n        .group-checkbox {\n        padding-left: 0 !important;\n      }\n      #content-pay\n        .main-content-pay\n        .left-content-pay\n        .payment-methods\n        .group-checkbox\n        .title-chek {\n        margin-left: 0 !important;\n      }\n      #content-pay .main-content-pay .title {\n        margin-bottom: 10px !important;\n      }\n      #header .top-header {\n        /*background-color: #fceebf;*/\n      }\n      .img-topbar {\n        max-width: 100%;\n      }\n      #header .top-header {\n        height: auto;\n      }\n      .name-product .text-base {\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        overflow: hidden;\n      }\n      /* css list product */\n      #content-product .main-content .right-product .group-list-product {\n        grid-column-gap: 8px;\n      }\n      #content-pay\n        .main-content-pay\n        .left-content-pay\n        .payment-methods\n        .group-checkbox {\n        padding-top: 20px !important;\n        margin-bottom: 10px !important;\n        border-radius: unset !important;\n        margin-bottom: 0 !important;\n        border: none !important;\n        border-bottom: 1px solid rgba(102, 102, 102, 0.35) !important;\n      }\n      #content-pay\n        .main-content-pay\n        .left-content-pay\n        .payment-methods\n        .group-checkbox\n        .title-chek {\n        margin-left: 10px;\n      }\n      .div-info-chuyen-khoan {\n        display: flex;\n        align-items: flex-start;\n        font-size: 15px;\n      }\n      .img-qr {\n        margin-left: 203px !important;\n      }\n      .div-so-tai-khoan {\n        line-height: 26px;\n        margin-left: 10px;\n        padding-bottom: 15px;\n        font-size: 14px;\n      }\n      .ul-info-nhan-hang {\n        list-style-type: disc;\n        margin-left: 0;\n        font-size: 14px;\n        list-style-position: inside;\n      }\n      .div-select-tt {\n        display: flex;\n      }\n      .btn-phuong-thuc {\n        border: none;\n        background: none;\n      }\n      #content-pay\n        .main-content-pay\n        .left-content-pay\n        .payment-methods\n        .group-checkbox {\n        padding-top: 0px !important;\n        padding-bottom: 10px !important;\n      }\n      @media (max-width: 1025px) {\n        .img-topbar {\n          object-fit: cover;\n          object-position: center;\n          transform: scale(1.9);\n        }\n        #content-pay\n          .main-content-pay\n          .left-content-pay\n          .payment-methods\n          .group-checkbox\n          .all-content {\n          width: 100%;\n        }\n        #content-pay\n          .main-content-pay\n          .left-content-pay\n          .payment-methods\n          .group-checkbox\n          .title-chek {\n          width: 100%;\n        }\n        .div-info-chuyen-khoan {\n          flex-direction: column;\n          align-items: flex-start;\n        }\n        .div-so-tai-khoan {\n          padding-top: 0;\n          line-height: 24px;\n          padding-bottom: 0;\n        }\n        .title-chek {\n          line-height: normal;\n        }\n        .img-qr {\n          margin: 0 !important;\n          max-width: 100%;\n          width: 185px !important;\n          margin-left: 10px !important;\n        }\n        .span-pgd {\n          font-size: 12px;\n        }\n\n        #content-product {\n          margin: 10px 0 !important;\n        }\n        #content-product .top-content {\n          margin-left: 16px;\n          margin-right: 16px;\n        }\n        #content-product .main-content .top-filter {\n          margin-left: 16px;\n          margin-right: 16px;\n        }\n        #content-product .main-content .right-product .group-list-product {\n          margin-left: 9px;\n          margin-right: 9px;\n        }\n        #section_coupons {\n          margin-left: 16px;\n          margin-right: 16px;\n        }\n        /* fix css trang gioi thieu */\n        #GROUP439 {\n          top: auto;\n          left: auto;\n        }\n        #HEADLINE17,\n        #HEADLINE492,\n        #HEADLINE511 {\n          width: 430px;\n        }\n        #GROUP405 {\n          top: 149.847px;\n          left: 38px;\n        }\n        #LINE396,\n        #LINE493 {\n          left: 158px;\n        }\n        #GROUP491 {\n          top: -37px;\n          left: auto;\n        }\n        #LINE396,\n        #LINE493 {\n          top: 159px;\n        }\n        #GROUP487 {\n          left: 15px;\n        }\n        #VIDEO489 {\n          width: 100%;\n        }\n        #BOX488,\n        #GROUP487 {\n          width: 390px;\n        }\n        #LIST_PARAGRAPH506,\n        #LIST_PARAGRAPH573 {\n          width: 34%;\n        }\n        #BOX500 > .ladi-box {\n          width: 41%;\n        }\n        #SECTION494 {\n          height: 1157px;\n        }\n        #BOX500 {\n          height: 1081px;\n        }\n        #GROUP409 {\n          left: auto;\n        }\n        #HEADLINE71,\n        #HEADLINE524 {\n          width: 417px;\n        }\n        #LINE395,\n        #LINE525 {\n          top: 101px;\n          left: 166px;\n        }\n        #BOX73,\n        #IMAGE70 {\n          display: none;\n        }\n        #PARAGRAPH513 {\n          width: 397px;\n          top: 165.34px;\n          left: 13px;\n        }\n        #BOX41 {\n          width: 557px;\n          height: 520px;\n          top: 148.34px;\n          left: auto;\n        }\n        #SECTION40 {\n          height: 721.208px;\n        }\n        #GROUP523 {\n          left: auto;\n        }\n        #GALLERY515 {\n          top: 135.232px;\n        }\n      }\n      /* font chữ */\n      * {\n        font-family: "Montserrat", sans-serif !important;\n      }\n      body {\n        font-family: "Montserrat", sans-serif;\n      }\n      a {\n        font-family: "Montserrat", sans-serif;\n      }\n      a,\n      body {\n        font-family: "Montserrat", sans-serif !important;\n      }\n      #header .bottom-header .left-content .group-category .item-category a {\n        font-weight: 500;\n      }\n      #header\n        .bottom-header\n        .left-content\n        .group-category\n        .dropdown-category\n        .left-dropdown\n        .group-item-category\n        .title\n        a,\n      #header\n        .bottom-header\n        .left-content\n        .group-category\n        .item-category\n        a:active {\n        font-weight: 500;\n      }\n      #content-homepage .new-products .item-new-product .text-new {\n        font-weight: 500;\n        margin-top: 10px;\n      }\n      #content-product-detail\n        .main-product-details\n        .right-product-detail\n        .group-price-voucher\n        .gr-voucher\n        .item-voucher\n        .text-voucher {\n        font-size: 13px;\n      }\n      /*css trang chu*/\n      #header .bottom-header {\n        background-color: #f7f8fa !important;\n      }\n      .div_ngang {\n        border-top: 1px #e1dcdc solid !important;\n        margin: 0 75px;\n      }\n    ',
          }}
        />
      </Head>
      <div className="list-icon-fix">
        <a href="tel:18009246">
          <Image
            className="lozad"
            src="https://thieuhoa.com.vn/v2/img/svg/phone.svg"
            alt="phone"
            width={50}
            height={50}
          />
        </a>
        <a href="https://www.messenger.com/t/1889518347796003">
          <Image
            className="lozad"
            src="https://thieuhoa.com.vn/v2/img/svg/pngwing-60.svg"
            alt="messenger"
            width={50}
            height={50}
          />
        </a>
        <a href="https://zalo.me/388030919384134642">
          <Image
            className="lozad"
            src="https://thieuhoa.com.vn/v2/img/svg/pngwing-61.svg"
            alt="zalo"
            width={50}
            height={50}
          />
        </a>
      </div>
      <div id="vue-app2">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n        .site-content {\n          padding-top: 5px;\n          width: 100%;\n          font-size: 16px;\n          line-height: 1.5em;\n          font-family: Helvetica, sans-serif;\n        }\n        .site-content .container {\n          padding: 0 75px;\n        }\n        .site-content .page__content {\n          width: 100%;\n          margin: 0 auto;\n        }\n        .site-content p {\n          margin-bottom: 5px;\n          font-size: 16px;\n          line-height: 1.5em;\n          font-family: Helvetica, sans-serif;\n        }\n        .ladi-container h1 {\n          font-size: 20px;\n        }\n        a {\n          text-decoration: none;\n        }\n        @media (max-width: 1025px) {\n          * {\n            overflow-x: initial;\n          }\n          .site-content .container {\n            padding: 0 15px;\n            margin: 0 auto;\n          }\n        }\n      ',
          }}
        />
        <div className="site-content">
          <div>
            <div className="page__content">
              <div className="ladi-wraper">
                <div id="SECTION1" className="ladi-section">
                  <div className="ladi-section-background" />
                  <div className="ladi-container" />
                </div>
                <div id="SECTION16" className="ladi-section">
                  <div className="ladi-section-background" />
                  <div className="ladi-container">
                    <div id="IMAGE581" className="ladi-element">
                      <div className="ladi-image ladi-transition">
                        <div className="ladi-image-background" />
                      </div>
                    </div>
                    <div id="GROUP405" className="ladi-element">
                      <div className="ladi-group">
                        <div id="IMAGE26" className="ladi-element">
                          <div className="ladi-image ladi-transition">
                            <div className="ladi-image-background" />
                          </div>
                        </div>
                        <div id="IMAGE23" className="ladi-element">
                          <div className="ladi-image ladi-transition">
                            <div className="ladi-image-background" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="GROUP439" className="ladi-element">
                      <div className="ladi-group">
                        <div id="HEADLINE17" className="ladi-element">
                          <h3 className="ladi-headline ladi-transition">
                            Nguồn cảm hứng của thương hiệu Thiều Hoa
                          </h3>
                        </div>
                        <div id="LINE396" className="ladi-element">
                          <div className="ladi-line">
                            <div className="ladi-line-container" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="PARAGRAPH20" className="ladi-element">
                      <div className="ladi-paragraph ladi-transition">
                        Hình ảnh người phụ nữ Việt Nam vốn từ lâu đã gắn bó với những tính từ như hy
                        sinh, lam lũ, giản dị hay tỉ mẩn, siêng năng,... Đặc biệt khi bước qua
                        ngưỡng cửa 30, khi mà dòng xoáy cơm áo gạo tiền cùng muôn ngàn nỗ lực vun
                        vén, chăm sóc gia đình con cái không ngừng ám ảnh người phụ nữ, họ càng có
                        ít thời gian để chăm sóc chính bản thân mình. Hiểu được sự thiệt thòi và vai
                        trò to lớn của người phụ nữ trong xã hội Việt Nam, các nhà sáng lập Thiều
                        Hoa đã nung nấu quyết định xây dựng nên một thương hiệu thời trang cho phụ
                        nữ và vì phụ nữ.&nbsp;
                      </div>
                    </div>
                  </div>
                </div>
                <div id="SECTION482" className="ladi-section">
                  <div className="ladi-section-background" />
                  <div className="ladi-container">
                    <div id="GROUP487" className="ladi-element">
                      <div className="ladi-group">
                        <div id="BOX488" className="ladi-element">
                          <div className="ladi-box ladi-transition" />
                        </div>
                        <div id="VIDEO489" className="ladi-element">
                          <div className="ladi-video">
                            <div className="ladi-video-background" />
                            <div id="SHAPE489" className="ladi-element">
                              <div className="ladi-shape ladi-transition">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  height="100%"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 408.7 408.7"
                                  fill="rgba(0, 0, 0, 0.5)"
                                >
                                  <polygon
                                    fill="#fff"
                                    points="163.5 296.3 286.1 204.3 163.5 112.4 163.5 296.3"
                                  />
                                  <path
                                    d="M204.3,0C91.5,0,0,91.5,0,204.3S91.5,408.7,204.3,408.7s204.3-91.5,204.3-204.3S316.7,0,204.3,0ZM163.5,296.3V112.4l122.6,91.9Z"
                                    transform="translate(0 0)"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="GROUP491" className="ladi-element">
                      <div className="ladi-group">
                        <div id="HEADLINE492" className="ladi-element">
                          <h3 className="ladi-headline ladi-transition">
                            Thiều Hoa và hành trình tạo nên Xu Hướng Phái Đẹp
                          </h3>
                        </div>
                        <div id="LINE493" className="ladi-element">
                          <div className="ladi-line">
                            <div className="ladi-line-container" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="SECTION2" className="ladi-section">
                  <div className="ladi-section-background" />
                  <div className="ladi-container">
                    <div id="BOX221" className="ladi-element">
                      <div className="ladi-box ladi-transition" />
                    </div>
                    <div id="GALLERY35" className="ladi-element">
                      <div className="ladi-gallery ladi-gallery-bottom">
                        <div className="ladi-gallery-view">
                          <div className="ladi-gallery-view-arrow ladi-gallery-view-arrow-left opacity-0" />
                          <div className="ladi-gallery-view-arrow ladi-gallery-view-arrow-right opacity-0" />
                          <div className="ladi-gallery-view-item selected" data-index={0} />
                          <div className="ladi-gallery-view-item" data-index={1} />
                          <div className="ladi-gallery-view-item" data-index={2} />
                          <div className="ladi-gallery-view-item" data-index={3} />
                          <div className="ladi-gallery-view-item" data-index={4} />
                          <div className="ladi-gallery-view-item" data-index={5} />
                          <div className="ladi-gallery-view-item" data-index={6} />
                          <div className="ladi-gallery-view-item" data-index={7} />
                        </div>
                        <div className="ladi-gallery-control">
                          <div className="ladi-gallery-control-box">
                            <div className="ladi-gallery-control-item selected" data-index={0} />
                            <div className="ladi-gallery-control-item" data-index={1} />
                            <div className="ladi-gallery-control-item" data-index={2} />
                            <div className="ladi-gallery-control-item" data-index={3} />
                            <div className="ladi-gallery-control-item" data-index={4} />
                            <div className="ladi-gallery-control-item" data-index={5} />
                            <div className="ladi-gallery-control-item" data-index={6} />
                            <div className="ladi-gallery-control-item" data-index={7} />
                          </div>
                          <div className="ladi-gallery-control-arrow ladi-gallery-control-arrow-left opacity-0" />
                          <div className="ladi-gallery-control-arrow ladi-gallery-control-arrow-right opacity-0" />
                        </div>
                      </div>
                    </div>
                    <div id="BOX28" className="ladi-element">
                      <div className="ladi-box ladi-transition" />
                    </div>
                    <div id="BOX36" className="ladi-element">
                      <div className="ladi-box ladi-transition" />
                    </div>
                    <div id="PARAGRAPH30" className="ladi-element">
                      <div className="ladi-paragraph ladi-transition">
                        Trên tinh thần đồng cảm và thấu hiểu phụ nữ, Thiều Hoa ra đời với sứ mệnh
                        mang đến những sản phẩm thời trang thiết kế cao cấp, thanh lịch mà giá cả
                        lại phải chăng nhất dành cho phụ nữ nói chung và phụ nữ trung niên nói
                        riêng. Là một thương hiệu tự hào Made in Việt Nam, Thiều Hoa luôn không
                        ngừng học hỏi, đổi mới và sáng tạo để nâng cao chất lượng sản phẩm, phát
                        triển mẫu mã và cải thiện dịch vụ bán hàng. Thiều Hoa nguyện làm tất cả để
                        mỗi phụ nữ Việt Nam luôn có cơ hội được làm đẹp và trở thành phiên bản ưu tú
                        nhất của chính mình!
                      </div>
                    </div>
                    <div id="IMAGE38" className="ladi-element">
                      <div className="ladi-image ladi-transition">
                        <div className="ladi-image-background" />
                      </div>
                    </div>
                    <div id="IMAGE39" className="ladi-element">
                      <div className="ladi-image ladi-transition">
                        <div className="ladi-image-background" />
                      </div>
                    </div>
                    <div id="GROUP407" className="ladi-element">
                      <div className="ladi-group">
                        <div id="LINE37" className="ladi-element">
                          <div className="ladi-line">
                            <div className="ladi-line-container" />
                          </div>
                        </div>
                        <div id="HEADLINE29" className="ladi-element">
                          <h3 className="ladi-headline ladi-transition">
                            Sứ mệnh hàng đầu <br />
                            <br />
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="SECTION494" className="ladi-section">
                  <div className="ladi-section-background" />
                  <div className="ladi-container">
                    <div id="BOX500" className="ladi-element">
                      <div className="ladi-box ladi-transition" />
                    </div>
                    <div id="LIST_PARAGRAPH506" className="ladi-element">
                      <div className="ladi-list-paragraph ladi-transition">
                        <ul>
                          <li>
                            Với nhiệm vụ làm đẹp cho phụ nữ, Thiều Hoa hướng đến phát triển hệ thống
                            cửa hàng trên toàn quốc và trở thành thương hiệu thời trang nữ - thời
                            trang trung niên hàng đầu ở Việt Nam. Với tất cả nỗ lực và quyết tâm,
                            chỉ từ một gian hàng ký gửi vào năm 2018, hiện nay Thiều Hoa đã có hơn
                            20 cửa hàng phân bố khắp các quận của thành phố Hồ Chí Minh, Hà Nội và
                            khu vực ngoại thành. Không dừng lại ở đó, Thiều Hoa cũng đang ấp ủ kế
                            hoạch mở rộng hoạt động sang các tỉnh lân cận thành phố Hồ Chí Minh
                            trong năm. Tất cả những thành tựu này chính là thành quả của một quá
                            trình nỗ lực lâu dài, không ngơi nghỉ của toàn bộ nhân viên Thiều Hoa.
                            Và dĩ nhiên không thể không nhắc đến sự ủng hộ to lớn của quý khách hàng
                            đã giúp Thiều Hoa có được ngày hôm nay. Niềm tin yêu và sự ủng hộ của
                            quý khách chính là động lực lớn nhất để Thiều Hoa ngày một hoàn thiện và
                            làm mới mình.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div id="GROUP510" className="ladi-element">
                      <div className="ladi-group">
                        <div id="HEADLINE511" className="ladi-element">
                          <h3 className="ladi-headline ladi-transition">Tầm nhìn</h3>
                        </div>
                        <div id="LINE512" className="ladi-element">
                          <div className="ladi-line">
                            <div className="ladi-line-container" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="BOX503" className="ladi-element">
                      <div className="ladi-box ladi-transition" />
                    </div>
                    <div id="BOX579" className="ladi-element">
                      <div className="ladi-box ladi-transition" />
                    </div>
                  </div>
                </div>
                <div id="SECTION40" className="ladi-section">
                  <div className="ladi-section-background" />
                  <div className="ladi-container">
                    <div id="BOX73" className="ladi-element">
                      <div className="ladi-box ladi-transition" />
                    </div>
                    <div id="IMAGE70" className="ladi-element">
                      <div className="ladi-image ladi-transition">
                        <div className="ladi-image-background" />
                      </div>
                    </div>
                    <div id="GROUP409" className="ladi-element">
                      <div className="ladi-group">
                        <div id="HEADLINE71" className="ladi-element">
                          <h3 className="ladi-headline ladi-transition">
                            Cam kết chất lượng từ
                            <br />
                            Thiều Hoa
                          </h3>
                        </div>
                        <div id="LINE395" className="ladi-element">
                          <div className="ladi-line">
                            <div className="ladi-line-container" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="BOX41" className="ladi-element">
                      <div className="ladi-box ladi-transition" />
                    </div>
                    <div id="PARAGRAPH513" className="ladi-element">
                      <div className="ladi-paragraph ladi-transition">
                        Với tiêu chí đặt sự hài lòng của khách hàng làm kim chỉ nam cho sự phát
                        triển lâu dài, đội ngũ nhân viên luôn tràn đầy nhiệt huyết, tận tâm và sáng
                        tạo tại Thiều Hoa đã cố gắng và nỗ lực không ngừng vì sứ mệnh mang đến thật
                        nhiều sản phẩm cao cấp và chất lượng với mức giá hợp lý nhất.
                        <br />
                        <br />
                        Đến thời điểm hiện tại, Thiều Hoa không chỉ được khách hàng yêu mến và tin
                        tưởng bởi các mẫu thời trang sang trọng, tinh tế mà còn bởi những chính sách
                        chăm sóc vì khách hàng như: Cam kết 1 đổi 1 trong 7 ngày, Miễn phí vận
                        chuyển toàn quốc, 100% hàng chính hãng Made in VietNam…
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="SECTION74" className="ladi-section">
                  <div className="ladi-section-background" />
                  <div className="ladi-container">
                    <div id="GROUP415" className="ladi-element">
                      <div className="ladi-group">
                        <div id="IMAGE77" className="ladi-element">
                          <div className="ladi-image ladi-transition">
                            <div className="ladi-image-background" />
                            <div className="ladi-overlay" />
                          </div>
                        </div>
                        <div id="BOX84" className="ladi-element">
                          <div className="ladi-box ladi-transition" />
                        </div>
                        <div id="PARAGRAPH75" className="ladi-element">
                          <div className="ladi-paragraph ladi-transition">
                            100% chất liệu cao cấp
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="GROUP414" className="ladi-element">
                      <div className="ladi-group">
                        <div id="IMAGE82" className="ladi-element">
                          <div className="ladi-image ladi-transition">
                            <div className="ladi-image-background" />
                            <div className="ladi-overlay" />
                          </div>
                        </div>
                        <div id="BOX85" className="ladi-element">
                          <div className="ladi-box ladi-transition" />
                        </div>
                        <div id="PARAGRAPH76" className="ladi-element">
                          <div className="ladi-paragraph ladi-transition">
                            100% made in Viet Nam
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="SECTION514" className="ladi-section">
                  <div className="ladi-section-background" />
                  <div className="ladi-container">
                    <div id="GALLERY515" className="ladi-element">
                      <div className="ladi-gallery ladi-gallery-bottom">
                        <div className="ladi-gallery-view">
                          <div className="ladi-gallery-view-arrow ladi-gallery-view-arrow-left opacity-0" />
                          <div className="ladi-gallery-view-arrow ladi-gallery-view-arrow-right opacity-0" />
                          <div className="ladi-gallery-view-item selected" data-index={0} />
                        </div>
                        <div className="ladi-gallery-control">
                          <div className="ladi-gallery-control-box">
                            <div className="ladi-gallery-control-item selected" data-index={0} />
                          </div>
                          <div className="ladi-gallery-control-arrow ladi-gallery-control-arrow-left opacity-0" />
                          <div className="ladi-gallery-control-arrow ladi-gallery-control-arrow-right opacity-0" />
                        </div>
                      </div>
                    </div>
                    <div id="GROUP523" className="ladi-element">
                      <div className="ladi-group">
                        <div id="HEADLINE524" className="ladi-element">
                          <h3 className="ladi-headline ladi-transition">
                            Hệ thống cửa hàng
                            <br />
                            Thiều Hoa
                          </h3>
                        </div>
                        <div id="LINE525" className="ladi-element">
                          <div className="ladi-line">
                            <div className="ladi-line-container" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="PARAGRAPH580" className="ladi-element">
                      <div className="ladi-paragraph ladi-transition">
                        Trong những năm tiếp theo, Thiều Hoa sẽ tiếp tục phát triển mạnh mẽ hơn nữa
                        để có thể mang lại thật nhiều giá trị tốt đẹp cho phụ nữ Việt không chỉ ở 2
                        thành phố lớn là Hồ Chí Minh và Hà Nội mà còn rộng khắp cả nước.
                        <br />
                      </div>
                    </div>
                    <div id="PARAGRAPH583" className="ladi-element">
                      <div className="ladi-paragraph ladi-transition">
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 1:</span>
                        &nbsp;174 Bạch Mai, Phường Cầu Dền, Hai Bà Trưng, Hà Nội
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 2:</span>
                        &nbsp;65 Nguyễn Lương Bằng, Chợ Dừa, Đống Đa, Hà Nội
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 3:</span>
                        &nbsp;130 Quang Trung, P. Quang Trung, Hà Đông
                        <br />
                      </div>
                    </div>
                    <div id="PARAGRAPH584" className="ladi-element">
                      <div className="ladi-paragraph ladi-transition">
                        <span style={{ fontWeight: 'bold' }}>🏪Miền Bắc</span>
                        <br />
                      </div>
                    </div>
                    <div id="PARAGRAPH585" className="ladi-element">
                      <div className="ladi-paragraph ladi-transition">
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 1:</span>
                        254 Cô Bắc, Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 2:</span>
                        422 Quang Trung, phường 10, Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 3:</span>
                        &nbsp;317 Nguyễn Thị Thập, Tân Phú, Quận 7, TP Hồ Chí Minh
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 4:</span>
                        49G Phan Đăng Lưu phường 7, quận Phú Nhuận, TPHCM
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 5:</span>
                        187 Đường Lê Văn Việt, Tăng Nhơn Phú B, Quận 9, HCM
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 6:</span>
                        850 Hậu Giang, phường 12, Quận 6, Thành phố Hồ Chí Minh
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 7:</span>
                        114 Đặng Văn Bi, Bình Thọ, Thủ Đức, TP. HCM
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 8:</span>
                        789 Lũy Bán Bích, Hoà Thanh, Tân Phú, Thành phố Hồ Chí Minh
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 9:</span>
                        245 Nguyễn Thị Tú, Bình Hưng Hòa B, Bình Tân, HCM
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 10:</span>
                        2/4A Nguyễn Ảnh Thủ , Trung Chánh, Hóc Môn, TP Hồ Chí Minh
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 11:</span>
                        172 Yersin, Thủ Đâu Một, Bình Dương
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 12: </span>
                        422 108 Ba Cu, Phường 3, Thành phố Vũng Tàu&nbsp;
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 13: </span>
                        19 Nguyễn Trãi, Tân An, Ninh Kiều, Cần Thơ&nbsp;
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 14:</span>
                        46 Xô Viết Nghệ Tĩnh, Phường 19, Bình Thạnh&nbsp;
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 15:</span>
                        1559 Phạm Văn Thuận, Thống Nhất, Thành phố Biên Hòa, Đồng Nai
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 16:</span>
                        400 Nguyễn Trung Trực, Vĩnh Lạc, Rạch Giá, Kiên Giang
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 17:</span>
                        186 Ấp Bắc, Phường 5, Thành phố Mỹ Tho, Tiền Giang
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 18:</span>
                        871 Đ. Hà Hoàng Hổ, Phường Mỹ Xuyên, Thành phố Long Xuyên, An Giang
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 19:</span>
                        801 Cách Mạng Tháng 8, Hiệp Ninh, Tây Ninh
                        <br />
                      </div>
                    </div>
                    <div id="PARAGRAPH586" className="ladi-element">
                      <div className="ladi-paragraph ladi-transition">
                        <span style={{ fontWeight: 'bold' }}>🏪 Miền Nam</span>
                        <br />
                      </div>
                    </div>
                    <div id="PARAGRAPH587" className="ladi-element">
                      <div className="ladi-paragraph ladi-transition">
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 1:</span>
                        &nbsp;44-46 Thái Nguyên, p.Phương Sài, tp.Nha Trang, Khánh Hòa
                        <br />
                        <span style={{ textDecorationLine: 'underline' }}>📍Cửa hàng 2:</span>
                        &nbsp;228 Nguyễn Văn Cừ, P. Hưng Phúc, Thành phố Vinh, Nghệ An
                        <br />
                        📍Cửa hàng 3: 15 Phan Chu Trinh, Thắng Lợi, Thành phố Buôn Ma Thuột, Đắk Lắk
                        <br />
                        📍Cửa hàng 4: 122 Nguyễn Văn Linh, Vĩnh Trung, Thanh Khê, Đà Nẵng
                        <br />
                        📍Cửa hàng 5: 45 Phan Đình Phùng, Phường 1, Thành phố Đà Lạt, Lâm Đồng
                        <br />
                      </div>
                    </div>
                    <div id="HEADLINE582" className="ladi-element">
                      <h3 className="ladi-headline ladi-transition">
                        🏪 Miền Trung
                        <br />
                      </h3>
                    </div>
                  </div>
                </div>
                <div id="SECTION78" className="ladi-section">
                  <div className="ladi-section-background" />
                  <div className="ladi-container">
                    <div id="GROUP444" className="ladi-element">
                      <div className="ladi-group">
                        <div id="HEADLINE83" className="ladi-element">
                          <h3 className="ladi-headline ladi-transition">
                            Thiều Hoa và phụ nữ <br />
                            <br />
                          </h3>
                        </div>
                        <div id="LINE397" className="ladi-element">
                          <div className="ladi-line">
                            <div className="ladi-line-container" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="PARAGRAPH528" className="ladi-element">
                      <div className="ladi-paragraph ladi-transition">
                        Là một thương hiệu cho phụ nữ và vì phụ nữ, Thiều Hoa luôn không ngừng nỗ
                        lực để mang đến những giá trị tốt đẹp cho một nửa thế giới. Vì Thiều Hoa
                        hiểu rằng, phụ nữ nói chung và phụ nữ Việt Nam nói riêng vốn đã chịu nhiều
                        thiệt thòi, và bằng tất cả sức mình, Thiều Hoa sẽ cố gắng hết sức để giúp
                        phụ nữ làm đẹp, bù đắp những vất vả hy sinh của phái đẹp. Không chỉ bằng
                        những lời nói suông, Thiều Hoa đã thực hiện nhiều chiến dịch xã hội nhằm tri
                        ân và đề cao giá trị của người phụ nữ trong xã hội hiện đại và thu về được
                        những tiếng vang lớn. <br />
                        <br />
                      </div>
                    </div>
                    <div id="CAROUSEL539" className="ladi-element">
                      <div className="ladi-carousel">
                        <div className="ladi-carousel-content">
                          <div id="IMAGE540" className="ladi-element">
                            <div className="ladi-image ladi-transition">
                              <div className="ladi-image-background" />
                            </div>
                          </div>
                          <div id="IMAGE541" className="ladi-element">
                            <div className="ladi-image ladi-transition">
                              <div className="ladi-image-background" />
                            </div>
                          </div>
                          <div id="IMAGE542" className="ladi-element">
                            <div className="ladi-image ladi-transition">
                              <div className="ladi-image-background" />
                            </div>
                          </div>
                        </div>
                        <div className="ladi-carousel-arrow ladi-carousel-arrow-left opacity-0" />
                        <div className="ladi-carousel-arrow ladi-carousel-arrow-right opacity-0" />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="SECTION529" className="ladi-section">
                  <div className="ladi-section-background" />
                  <div className="ladi-container">
                    <div id="IMAGE530" className="ladi-element">
                      <div className="ladi-image ladi-transition">
                        <div className="ladi-image-background" />
                      </div>
                    </div>
                    <div id="IMAGE531" className="ladi-element">
                      <div className="ladi-image ladi-transition">
                        <div className="ladi-image-background" />
                      </div>
                    </div>
                    <div id="GROUP532" className="ladi-element">
                      <div className="ladi-group">
                        <div id="HEADLINE533" className="ladi-element">
                          <h3 className="ladi-headline ladi-transition">
                            Chiến dịch “Khoác Lên Hạnh Phúc”
                            <br />
                          </h3>
                        </div>
                        <div id="LINE534" className="ladi-element">
                          <div className="ladi-line">
                            <div className="ladi-line-container" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="IMAGE535" className="ladi-element">
                      <div className="ladi-image ladi-transition">
                        <div className="ladi-image-background" />
                      </div>
                    </div>
                    <div id="PARAGRAPH536" className="ladi-element">
                      <div className="ladi-paragraph ladi-transition">
                        “Khoác Lên Hạnh Phúc” là chiến dịch được khởi xướng vào dịp ngày Quốc tế Phụ
                        Nữ. Thông qua việc tìm gặp, thăm hỏi và tặng quà cho những người phụ nữ lam
                        lũ, vất vả hoặc có hoàn cảnh khó khăn, Thiều Hoa muốn nhắn gửi đến phụ nữ dù
                        trong hoàn cảnh nào cũng phải luôn biết quan tâm đến cảm xúc và sức khoẻ của
                        chính bản thân mình. Vì hàng ngàn những mối bận tâm riêng, đôi lúc chúng ta
                        quên mất rằng bản thân mình cũng rất cần được yêu thương và chăm sóc. Bằng
                        sự đầu tư về trang phục, quần áo và trang điểm, Khoác Lên Hạnh Phúc đã cho
                        rất nhiều phụ nữ được lần đầu nhìn thấy bản thân thật lộng lẫy và xinh đẹp.
                        Và đó cũng là điều lớn nhất mà chiến dịch muốn nhắc nhở tất cả phụ nữ, rằng
                        “không có người phụ nữ xấu, chỉ có người phụ nữ không biết làm đẹp”!
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="SECTION543" className="ladi-section">
                  <div className="ladi-section-background" />
                  <div className="ladi-container">
                    <div id="GROUP574" className="ladi-element">
                      <div className="ladi-group">
                        <div id="IMAGE575" className="ladi-element">
                          <div className="ladi-image ladi-transition">
                            <div className="ladi-image-background" />
                          </div>
                        </div>
                        <div id="BOX576" className="ladi-element">
                          <div className="ladi-box ladi-transition" />
                        </div>
                        <div id="IMAGE577" className="ladi-element">
                          <div className="ladi-image ladi-transition">
                            <div className="ladi-image-background" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="IMAGE544" className="ladi-element">
                      <div className="ladi-image ladi-transition">
                        <div className="ladi-image-background" />
                      </div>
                    </div>
                    <div id="IMAGE545" className="ladi-element">
                      <div className="ladi-image ladi-transition">
                        <div className="ladi-image-background" />
                      </div>
                    </div>
                    <div id="GROUP546" className="ladi-element">
                      <div className="ladi-group">
                        <div id="HEADLINE547" className="ladi-element">
                          <h3 className="ladi-headline ladi-transition">
                            Chiến dịch “Mùa xuân của mẹ”
                            <br />
                          </h3>
                        </div>
                        <div id="LINE548" className="ladi-element">
                          <div className="ladi-line">
                            <div className="ladi-line-container" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="LIST_PARAGRAPH573" className="ladi-element">
                      <div className="ladi-list-paragraph ladi-transition">
                        <ul>
                          <li>
                            “Mùa xuân của mẹ” là một chiến dịch xã hội nhằm lan toả giá trị yêu
                            thương đến cộng đồng vào dịp tết Nguyên Đán. Trên vai của mỗi một sinh
                            viên rời xa quê hương đến thành phố để học tập là cả một sự kỳ vọng và
                            niềm tin lớn lao của gia đình. Trong đó không thể không nhắc đến mẹ của
                            các em, những người phụ nữ vốn đã một đời lam lũ. Về phần các sinh viên,
                            để đỡ đần bố mẹ ở quê xa, nhiều bạn cũng phải chật vật xoay sở vừa học ở
                            trường, vừa đi làm thêm để trang trải cuộc sống. Do đó dù rất muốn thể
                            hiện tình cảm với mẹ vào dịp tết, nhưng vì bài toán kinh tế mỗi khi xuân
                            về nên đôi khi một món quà tết cho mẹ cũng trở nên xa xỉ.
                          </li>
                          <li>
                            Hiểu được điều đó, thương hiệu thời trang nữ trung niên Thiều Hoa đã tạo
                            ra chiến dịch “Mùa xuân của mẹ” nhằm tạo cơ hội cho những bạn sinh viên
                            thể hiện tình cảm với mẹ. Chiến dịch hứa hẹn sẽ mang đến quà tết cho bà/
                            mẹ của hơn 600.000 sinh viên trên toàn thành phố vào dịp tết.
                          </li>
                          <li>
                            <br />
                          </li>
                          <li />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="SECTION_POPUP" className="ladi-section">
                  <div className="ladi-section-background" />
                  <div className="ladi-container">
                    <div id="POPUP455" className="ladi-element">
                      <div className="ladi-popup">
                        <div className="ladi-popup-background" />
                        <div className="ladi-overlay" />
                        <div id="GROUP456" className="ladi-element">
                          <div className="ladi-group">
                            <div id="BOX457" className="ladi-element">
                              <div className="ladi-box ladi-transition" />
                            </div>
                            <div
                              id="FORM458"
                              data-config-id="5f8947cdcf7c1706e949fd8a"
                              className="ladi-element"
                            >
                              <form autoComplete="off" method="post" className="ladi-form">
                                <div id="FORM_ITEM459" className="ladi-element">
                                  <div className="ladi-form-item-container">
                                    <div className="ladi-form-item-background" />
                                    <div className="ladi-form-item">
                                      <select
                                        tabIndex={5}
                                        name="form_item372"
                                        className="ladi-form-control ladi-form-control-select"
                                        data-selected=""
                                      >
                                        <option value="">Màu</option>
                                        <option value="Màu Đỏ tươi">Màu Đỏ tươi</option>
                                        <option value="Màu Đỏ đô">Màu Đỏ đô</option>
                                        <option value="Màu Xanh lá">Màu Xanh lá</option>
                                        <option value="Màu Đỏ rượu">Màu Đỏ rượu</option>
                                        <option value="Màu Vàng nghệ">Màu Vàng nghệ</option>
                                        <option value="Màu xám">Màu xám</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div id="BUTTON460" className="ladi-element">
                                  <div className="ladi-button ladi-transition">
                                    <div className="ladi-button-background" />
                                    <div
                                      id="BUTTON_TEXT460"
                                      className="ladi-element ladi-button-headline"
                                    >
                                      <p className="ladi-headline ladi-transition">MUA NGAY</p>
                                    </div>
                                  </div>
                                </div>
                                <div id="FORM_ITEM462" className="ladi-element">
                                  <div className="ladi-form-item-container">
                                    <div className="ladi-form-item-background" />
                                    <div className="ladi-form-item">
                                      <input
                                        autoComplete="off"
                                        tabIndex={1}
                                        name="name"
                                        required=""
                                        className="ladi-form-control"
                                        type="text"
                                        placeholder="Họ và tên"
                                        defaultValue=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div id="FORM_ITEM463" className="ladi-element">
                                  <div className="ladi-form-item-container">
                                    <div className="ladi-form-item-background" />
                                    <div className="ladi-form-item">
                                      <input
                                        autoComplete="off"
                                        tabIndex={3}
                                        name="phone"
                                        required=""
                                        className="ladi-form-control"
                                        type="tel"
                                        placeholder="Số điện thoại"
                                        pattern="(\+84|0){1}(9|8|7|5|3){1}[0-9]{8}"
                                        defaultValue=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div id="FORM_ITEM464" className="ladi-element">
                                  <div className="ladi-form-item-container">
                                    <div className="ladi-form-item-background" />
                                    <div className="ladi-form-item">
                                      <input
                                        autoComplete="off"
                                        tabIndex={4}
                                        name="address"
                                        required=""
                                        className="ladi-form-control"
                                        type="text"
                                        placeholder="Địa chỉ"
                                        defaultValue=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div id="FORM_ITEM465" className="ladi-element">
                                  <div className="ladi-form-item-container">
                                    <div className="ladi-form-item-background" />
                                    <div className="ladi-form-item">
                                      <select
                                        tabIndex={5}
                                        name="form_item371"
                                        className="ladi-form-control ladi-form-control-select"
                                        data-selected=""
                                      >
                                        <option value="">Size</option>
                                        <option value="Size S">Size S</option>
                                        <option value="Size M">Size M</option>
                                        <option value="Size L">Size L</option>
                                        <option value="Size XL">Size XL</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div id="FORM_ITEM466" className="ladi-element">
                                  <div className="ladi-form-item-container">
                                    <div className="ladi-form-item-background" />
                                    <div className="ladi-form-item">
                                      <textarea
                                        autoComplete="off"
                                        tabIndex={6}
                                        name="message"
                                        className="ladi-form-control"
                                        placeholder="Để lại lời nhắn cho chúng tôi"
                                        defaultValue={''}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <button type="submit" className="ladi-hidden" />
                              </form>
                            </div>
                            <div id="HEADLINE467" className="ladi-element">
                              <h3 className="ladi-headline ladi-transition">THÔNG TIN ĐẶT HÀNG</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="backdrop-popup" className="backdrop-popup" />
              <div id="backdrop-dropbox" className="backdrop-dropbox" />
              <div id="lightbox-screen" className="lightbox-screen" />
              {/*[if lt IE 9
        ]>
        <!
      [endif]*/}
              <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@400;700&display=swap"
                rel="stylesheet"
                type="text/css"
              />
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    '\n              @-webkit-keyframes pulse {\n                0% {\n                  -webkit-transform: scale(1);\n                  transform: scale(1);\n                }\n                50% {\n                  -webkit-transform: scale(1.1);\n                  transform: scale(1.1);\n                }\n                100% {\n                  -webkit-transform: scale(1);\n                  transform: scale(1);\n                }\n              }\n              @keyframes pulse {\n                0% {\n                  -webkit-transform: scale(1);\n                  -ms-transform: scale(1);\n                  transform: scale(1);\n                }\n                50% {\n                  -webkit-transform: scale(1.1);\n                  -ms-transform: scale(1.1);\n                  transform: scale(1.1);\n                }\n                100% {\n                  -webkit-transform: scale(1);\n                  -ms-transform: scale(1);\n                  transform: scale(1);\n                }\n              }\n              @-webkit-keyframes fadeInLeft {\n                0% {\n                  opacity: 0;\n                  -webkit-transform: translateX(-20px);\n                  transform: translateX(-20px);\n                }\n                100% {\n                  opacity: 1;\n                  -webkit-transform: translateX(0);\n                  transform: translateX(0);\n                }\n              }\n              @keyframes fadeInLeft {\n                0% {\n                  opacity: 0;\n                  -webkit-transform: translateX(-20px);\n                  -ms-transform: translateX(-20px);\n                  transform: translateX(-20px);\n                }\n                100% {\n                  opacity: 1;\n                  -webkit-transform: translateX(0);\n                  -ms-transform: translateX(0);\n                  transform: translateX(0);\n                }\n              }\n              @-webkit-keyframes fadeInUp {\n                0% {\n                  opacity: 0;\n                  -webkit-transform: translateY(20px);\n                  transform: translateY(20px);\n                }\n                100% {\n                  opacity: 1;\n                  -webkit-transform: translateY(0);\n                  transform: translateY(0);\n                }\n              }\n              @keyframes fadeInUp {\n                0% {\n                  opacity: 0;\n                  -webkit-transform: translateY(20px);\n                  -ms-transform: translateY(20px);\n                  transform: translateY(20px);\n                }\n                100% {\n                  opacity: 1;\n                  -webkit-transform: translateY(0);\n                  -ms-transform: translateY(0);\n                  transform: translateY(0);\n                }\n              }\n              @-webkit-keyframes bounceInLeft {\n                0% {\n                  opacity: 0;\n                  -webkit-transform: translateX(-2000px);\n                  transform: translateX(-2000px);\n                }\n                60% {\n                  opacity: 1;\n                  -webkit-transform: translateX(30px);\n                  transform: translateX(30px);\n                }\n                80% {\n                  -webkit-transform: translateX(-10px);\n                  transform: translateX(-10px);\n                }\n                100% {\n                  -webkit-transform: translateX(0);\n                  transform: translateX(0);\n                }\n              }\n              @keyframes bounceInLeft {\n                0% {\n                  opacity: 0;\n                  -webkit-transform: translateX(-2000px);\n                  -ms-transform: translateX(-2000px);\n                  transform: translateX(-2000px);\n                }\n                60% {\n                  opacity: 1;\n                  -webkit-transform: translateX(30px);\n                  -ms-transform: translateX(30px);\n                  transform: translateX(30px);\n                }\n                80% {\n                  -webkit-transform: translateX(-10px);\n                  -ms-transform: translateX(-10px);\n                  transform: translateX(-10px);\n                }\n                100% {\n                  -webkit-transform: translateX(0);\n                  -ms-transform: translateX(0);\n                  transform: translateX(0);\n                }\n              }\n            ',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
