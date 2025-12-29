import emitter from 'tiny-emitter/instance';
import services from './services/index.js';
import { useIconsStore } from '@/pinia/icons';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811 from '@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/src/wwPlugin.js';
import plugin_cd33cf33_e29f_4e8c_ac26_b997fe507ce7 from '@/components/plugins/plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7/src/wwPlugin.js';
/* wwFront:end */

import { computed, reactive } from 'vue';

export default {
    ...services,
     $on(event, fn) {
        emitter.on(event, fn);
    },
    $once(event, fn) {
        emitter.once(event, fn);
    },
    $emit(event, ...args) {
        if (!event) {
            return;
        }
        emitter.emit(event, ...args);
    },
    $off(event, fn) {
        emitter.off(event, fn);
    },
     front: {},
    $focus: null,
    env: process.env.NODE_ENV,
    async initFront({ router, store }) {
 
        this.front.router = router;
        /* wwFront:start */
        this.$store = store;
        /* wwFront:end */

        //Init services
        this.wwLog.init();

 
        wwLib.logStore.verbose('Starting the application...');
        await this.wwWebsiteData.init();
        this.wwLang.init(router);

        /* wwFront:start */
        // eslint-disable-next-line no-undef
        wwLib.wwPluginHelper.registerPlugin('plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811', plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811);
wwLib.wwPluginHelper.registerPlugin('plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7', plugin_cd33cf33_e29f_4e8c_ac26_b997fe507ce7);
        /* wwFront:end */

 
        services.scrollStore.start();
        services.keyboardEventStore.start();
    },
     // TODO: Verify with Alexis, still uses wwImageMultiLang
    getResponsiveStyleProp({ store, style, uid, states = [], prop }) {
        store = store || wwLib.getFrontWindow().wwLib.$store;
        if (!style && uid) {
            const wwObject = this.$store.getters['websiteData/getWwObjects'][uid];
            if (!wwObject) return '';
            style = (wwObject._state || {}).style || {};
        }

        const screenSizes = store.getters['front/getScreenSizes'];
        const screenSize = store.getters['front/getScreenSize'];

        let value = '';

        for (const media in screenSizes) {
            if (style[media] && typeof style[media][prop] !== 'undefined') {
                value = style[media][prop];
            }
            if (media === screenSize) {
                break;
            }
        }
        for (const state of states) {
            for (const media in screenSizes) {
                if (style[`${state}_${media}`] && style[`${state}_${media}`][prop]) {
                    value = style[`${state}_${media}`][prop];
                }
                if (media === screenSize) {
                    break;
                }
            }
        }

        return value;
    },
    globalContext: reactive({
        page: computed(() => {
            const page = wwLib.$store.getters['websiteData/getPage'];
            if (!page) return {};
            else if (!page.cmsDataSetPath) return { ...pageSanitizer(page) };
            return { ...pageSanitizer(page), data: wwLib.$store.getters['data/getPageCollectionData'] };
        }),
        pageParameters: computed(() => {
            const pageParameters = Object.values(wwLib.$store.getters['data/getPageParameterVariables']);
            const pageParametersValueMap = {};
            for (const pageParameter of pageParameters) pageParametersValueMap[pageParameter.id] = pageParameter.value;
            return pageParametersValueMap;
        }),
        pages: computed(() => {
            const pages = wwLib.$store.getters['websiteData/getPages'];
            const pagesValueMap = {};
            for (const page of pages) pagesValueMap[page.id] = pageSanitizer(page);
            return pagesValueMap;
        }),
        colors: computed(() => {
            const theme = wwLib.$store.getters['front/getTheme'];
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable, no-undef
            return theme === 'dark' ? {"940e3bde-293f-4dc0-9697-534ffc2e9b3f":"#101828","dc2938dc-b6d0-47f0-8b54-e3393797a1bb":"#6941C6","7b97dce1-65ee-4f25-9017-255466370a22":"#7F56D9","72fde2c4-7830-4326-8bd5-8a3c82399621":"#FFFFFF","fa9f934a-03ce-4866-9b26-b5fa6fde9ec9":"#9E77ED","dcfafe3d-191a-4b70-9e9c-9c9e3ec4ecce":"#F9F5FF","7cfb0bbb-9ca6-4289-90fa-4d6829c741dc":"#475467","f4c3fbf4-75a3-4dd9-a81d-f1afc38d58f6":"#344054","611b6f1a-e888-4f8f-8c62-52f7c176699f":"#EAECF0","e0d4b9dd-5074-4969-91e4-c7c3300bb658":"#81C784","70799203-12d1-4cba-a88c-7ba6e0006d6c":"#66BB6A","65b1be89-15c6-4fd3-b839-235d0f13cef7":"#4CAF50","2df5b48d-6f41-4279-9c6f-705246fa7c6b":"#A5D6A7","219d09af-4aa8-409e-8182-634fc8a3d754":"#E4E4E7","5f486176-e036-4033-8752-af576aee8a7f":"#34D399","7045e167-a987-460f-acd2-1da31138f6e4":"#047857","670a336c-5a3e-4d1c-a1b3-c514e35225f9":"#35967c","e9f74963-90b0-4590-9712-b2de862ef455":"#1c1c1c","ead412b7-075c-4642-a1b9-b6f48672c0b4":"#1C1C1C80","599475c2-3436-4fe1-b8b1-0ab0de2ac434":"#EEEEEE","53b850d5-accf-4c0d-9bad-b1ee6af53b78":"#545454"} : {"940e3bde-293f-4dc0-9697-534ffc2e9b3f":"#101828","dc2938dc-b6d0-47f0-8b54-e3393797a1bb":"#6941C6","7b97dce1-65ee-4f25-9017-255466370a22":"#7F56D9","72fde2c4-7830-4326-8bd5-8a3c82399621":"#FFFFFF","fa9f934a-03ce-4866-9b26-b5fa6fde9ec9":"#9E77ED","dcfafe3d-191a-4b70-9e9c-9c9e3ec4ecce":"#F9F5FF","7cfb0bbb-9ca6-4289-90fa-4d6829c741dc":"#475467","f4c3fbf4-75a3-4dd9-a81d-f1afc38d58f6":"#344054","611b6f1a-e888-4f8f-8c62-52f7c176699f":"#EAECF0","e0d4b9dd-5074-4969-91e4-c7c3300bb658":"#81C784","70799203-12d1-4cba-a88c-7ba6e0006d6c":"#66BB6A","65b1be89-15c6-4fd3-b839-235d0f13cef7":"#4CAF50","2df5b48d-6f41-4279-9c6f-705246fa7c6b":"#A5D6A7","219d09af-4aa8-409e-8182-634fc8a3d754":"#E4E4E7","5f486176-e036-4033-8752-af576aee8a7f":"#34D399","7045e167-a987-460f-acd2-1da31138f6e4":"#047857","670a336c-5a3e-4d1c-a1b3-c514e35225f9":"#35967c","e9f74963-90b0-4590-9712-b2de862ef455":"#1c1c1c","ead412b7-075c-4642-a1b9-b6f48672c0b4":"#1C1C1C80","599475c2-3436-4fe1-b8b1-0ab0de2ac434":"#EEEEEE","53b850d5-accf-4c0d-9bad-b1ee6af53b78":"#545454"};
            /* wwFront:end */
        }),
        spacings:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {},
        /* wwFront:end */
        typographies:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"1972e02c-2fdd-46f5-88d5-af5ea04818a3":"600 60px/72px var(--ww-default-font-family, sans-serif)","88ef110a-49ab-4390-88c8-737e28a0ada2":"600 16px/24px var(--ww-default-font-family, sans-serif)","b1e22e8d-bd54-4cb6-8c66-d3efd2fc1f57":"500 14px/20px var(--ww-default-font-family, sans-serif)","c8e9ba2f-3d8a-4093-aec1-7cc71d12b18b":"600 18px/28px var(--ww-default-font-family, sans-serif)","d73521bc-4b82-4a05-9080-adfff171fd62":"400 20px/30px var(--ww-default-font-family, sans-serif)","d0e54a72-a9f7-44f0-883b-7664fc7b7b14":"600 20px/30px var(--ww-default-font-family, sans-serif)","e1840dc1-3011-4256-b61c-2a8f89cf2d54":"400 16px/24px var(--ww-default-font-family, sans-serif)","f9c1cf0d-b37c-4ca2-9589-e9cbbb3af479":"400 48px/60px var(--ww-default-font-family, sans-serif)","79bf1588-1049-4153-8ab1-05ed25f1fb41":"600 36px/44px var(--ww-default-font-family, sans-serif)","4cbda980-c0c0-49ef-bcc6-7d216970b0f4":"400 16px/24px var(--ww-default-font-family, sans-serif)","44c258bc-dc20-4e27-b9fe-d575840ffb9b":"400 18px/28px var(--ww-default-font-family, sans-serif)","a3e0c135-d450-465a-88d5-dec78f49ed65":"600 30px/38px var(--ww-default-font-family, sans-serif)","6bb71c4f-4c0b-43f8-9aa5-c3151282e0c2":"500 16px/24px var(--ww-default-font-family, sans-serif)","fbd3b863-d121-4e5b-9524-1fc5d6d514f1":"700 24px/24px var(--ww-default-font-family, sans-serif)","eb543455-4088-498e-b067-787cf4108d9c":"600 48px/56px var(--ww-default-font-family, sans-serif)","13aec92b-f7d6-409e-b4e3-56ad55176278":"400 14px/20px var(--ww-default-font-family, sans-serif)"},
        /* wwFront:end */
        browser: computed(() => {
            const router = wwLib.manager ? wwLib.getEditorRouter() : wwLib.getFrontRouter();
            const currentRoute = router.currentRoute.value;
            let currentQueries = currentRoute.query;
             return {
                url: window.location.origin + currentRoute.fullPath,
                path: currentRoute.path,
                // verify if auth plugin
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                source: currentQueries._source,
                /* wwFront:end */
                query: currentQueries,
                domain: window.location.hostname,
                baseUrl: window.location.origin,
                breakpoint: wwLib.$store.getters['front/getScreenSize'],
                environment: wwLib.getEnvironment(),
                theme: wwLib.$store.getters['front/getTheme'],
            };
        }),
        screen: services.scrollStore.screen,
        componentPositionInfo: services.scrollStore.componentPositionInfo,
    }),

    pageData: computed(() => {
        const lang = wwLib.$store.getters['front/getLang'];
        const cmsDataSetPath = wwLib.$store.getters['websiteData/getPage'].cmsDataSetPath;
        if (!cmsDataSetPath) {
            return { lang };
        }

        return { lang, data: wwLib.$store.getters['data/getPageCollectionData'] };
    }),

    getEnvironment() {
        return wwLib.manager
            ? 'editor'
            : window.location.host.includes(
                  // TODO: add staging2 ?
                  '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
              )
            ? 'staging'
            : window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL)
            ? 'preview'
            : 'production';
    },

    useBaseTag() {
        return (
            wwLib.getEnvironment() === 'production' &&
            window.wwg_designInfo.baseTag &&
            window.wwg_designInfo.baseTag.href
        );
    },

    getBaseTag() {
        let baseTag = window.wwg_designInfo.baseTag?.href || '';
        if (!baseTag.startsWith('/')) {
            baseTag = '/' + baseTag;
        }
        if (!baseTag.endsWith('/')) {
            baseTag += '/';
        }
        return baseTag;
    },

    /**
     * @PUBLIC_API
     */
    getFrontWindow() {
        if (document.querySelector('.ww-manager-iframe')) {
            return document.querySelector('.ww-manager-iframe').contentWindow;
        }
        return window;
    },

    /**
     * @PUBLIC_API
     */
    getFrontDocument() {
        return this.getFrontWindow().document;
    },

    /**
     * @PUBLIC_API
     */
    getFrontRouter() {
        return this.front.router;
    },

    /**
     * @PUBLIC_API
     */
    getEditorWindow() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorDocument() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorRouter() {
        return this.editor.router;
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwApp.goTo
     */
    goTo(...args) {
        wwLib.wwLog.warn('wwLib.goTo is DEPRECATED, use wwLib.wwApp.goTo instead');
        wwLib.wwApp.goTo(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getStyleFromToken
     */
    getStyleFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getStyleFromToken is DEPRECATED, use wwLib.wwUtils.getStyleFromToken instead');
        return wwLib.wwUtils.getStyleFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getTypoFromToken
     */
    getTypoFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getTypoFromToken is DEPRECATED, use wwLib.wwUtils.getTypoFromToken instead');
        return wwLib.wwUtils.getTypoFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    element(value) {
        wwLib.wwLog.warn('wwLib.element is DEPRECATED');
        if (typeof value === 'object') {
            return { isWwObject: true, ...value };
        } else {
            return { isWwObject: true, type: value };
        }
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.resolveObjectPropertyPath
     */
    resolveObjectPropertyPath(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.resolveObjectPropertyPath is DEPRECATED, use wwLib.wwUtils.resolveObjectPropertyPath instead'
        // );
        return wwLib.wwUtils.resolveObjectPropertyPath(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwutils.getTextStyleFromContent
     */
    getTextStyleFromContent(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.getTextStyleFromContent is DEPRECATED, use wwLib.wwUtils.getTextStyleFromContent instead'
        // );
        return wwLib.wwUtils.getTextStyleFromContent(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwWorkflow.executeGlobal
     */
    async executeWorkflow(...args) {
        wwLib.wwLog.warn('wwLib.executeWorkflow is DEPRECATED, use wwLib.wwWorkflow.executeGlobal instead');
        return wwLib.wwWorkflow.executeGlobal(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.findParentUidByFlag
     */
    findParentUidByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.findParentUidByFlag is DEPRECATED, use wwLib.findParentUidByFlag instead');
        return wwLib.wwEditor.findParentUidByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.selectParentByFlag
     */
    selectParentByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.selectParentByFlag is DEPRECATED, use wwLib.selectParentByFlag instead');
        return wwLib.wwEditor.selectParentByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useCreate
     */
    useCreateElement() {
        wwLib.wwLog.warn('wwLib.useCreateElement is DEPRECATED, use wwLib.wwElement.useCreate instead');
        return this.wwElement.useCreate();
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useLayoutStyle
     */
    useLayoutStyle() {
        wwLib.wwLog.warn('wwLib.useLayoutStyle is DEPRECATED, use wwLib.wwElement.useLayoutStyle instead');
        return wwLib.wwElement.useLayoutStyle();
    },

    /**
     * @PUBLIC_API
     */
    useIcons() {
        const store = useIconsStore();
        return {
            getIcon: store.getIcon,
        };
    },
};

function pageSanitizer(page) {
    const keysToInclude = [
        'id',
        'name',
        'folder',
        'metaImage',
        'pageLoaded',
        'paths',
        'langs',
        'meta',
        'title',
        'sections',
        'pageUserGroups',
    ];

    const _page = {};
    keysToInclude.forEach(key => {
        _page[key] = page[key];
    });

    _page.meta && delete _page.meta.__typename;
    for (const section of _page.sections || []) {
        delete section.__typename;
    }

    const lang = wwLib.$store.getters['front/getLang'];
    if (_page.paths) _page.path = _page.paths[lang] || _page.paths.default;
    else _page.path = null;

    _page.lang = lang;

    return _page;
}
