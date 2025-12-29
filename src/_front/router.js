import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"7494438b-0591-4edd-92cc-3d24a08e7019","homePageId":"72d62f6f-ace8-4fbd-96f3-72486afcbaa4","authPluginId":null,"baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[],"pages":[{"id":"5e809371-df7d-455d-97d4-12a2ac4ade45","linkId":"5e809371-df7d-455d-97d4-12a2ac4ade45","name":"Signup","folder":null,"paths":{"en":"signup","default":"signup"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f246319e-758a-4b32-83fa-bd43f93ec718","sectionTitle":"Nav bar","linkId":"39615e5e-af1f-4503-b367-2d267fdf3106"},{"uid":"2418d694-120b-47b4-b08f-aa1914bd5fae","sectionTitle":"Login","linkId":"07677298-76f6-454f-b2c0-21e9ecda7b6a"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"72d62f6f-ace8-4fbd-96f3-72486afcbaa4","linkId":"72d62f6f-ace8-4fbd-96f3-72486afcbaa4","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f246319e-758a-4b32-83fa-bd43f93ec718","sectionTitle":"Nav bar","linkId":"39615e5e-af1f-4503-b367-2d267fdf3106"},{"uid":"182b25a2-4c16-413d-92b6-eab4a283f9dd","sectionTitle":"Hero Section","linkId":"fedd370a-cf8c-47fc-b931-20aeb518629b"},{"uid":"18e4945a-2d6d-4da8-8e39-a1e699b8584c","sectionTitle":"About Us Section","linkId":"6dbf971f-a1b1-4162-854c-2c3b8ef6285b"},{"uid":"c96d7e0b-0596-4f0e-abc9-28e8f1d94a0f","sectionTitle":"Features Section","linkId":"d6a2cfec-9242-43bd-af1c-8d9de0a1314f"},{"uid":"750956b6-9e82-4ad3-98ed-36fd289e9912","sectionTitle":"Facts Section","linkId":"d62ca971-8f32-4d9b-a1bd-dd0bfe6c5af4"},{"uid":"897ed87f-319e-4035-9fd0-769cac857af9","sectionTitle":"FAQ Section","linkId":"b42d72be-b7f5-4d9c-9fbc-d23779d54d45"},{"uid":"4615d3b5-8881-4ca0-a6b0-b658b3411713","sectionTitle":"Contact Section","linkId":"1f675146-88a7-4c14-8eba-7e13c6ba587c"},{"uid":"d65bf7db-b6d1-47f6-b3c0-af12fde0e963","sectionTitle":"Footer Section","linkId":"63b38708-e1df-4c70-96e4-6d4de2060a1f"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"7fbf70e4-87ea-4bcc-a5ba-f4d6b4062607","linkId":"7fbf70e4-87ea-4bcc-a5ba-f4d6b4062607","name":"Agent","folder":null,"paths":{"en":"agent","default":"agent"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f246319e-758a-4b32-83fa-bd43f93ec718","sectionTitle":"Nav bar","linkId":"39615e5e-af1f-4503-b367-2d267fdf3106"},{"uid":"5776dbdd-3fef-459d-8f59-29b3e467e194","sectionTitle":"Section","linkId":"343d92f2-7d2e-46ef-a27f-ae4f6998b6cc"},{"uid":"d65bf7db-b6d1-47f6-b3c0-af12fde0e963","sectionTitle":"Footer Section","linkId":"63b38708-e1df-4c70-96e4-6d4de2060a1f"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c551ecfa-da83-4997-99c7-4910e0e79e3b","linkId":"c551ecfa-da83-4997-99c7-4910e0e79e3b","name":"About_Us","folder":null,"paths":{"en":"about_us","default":"about_us"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f246319e-758a-4b32-83fa-bd43f93ec718","sectionTitle":"Nav bar","linkId":"39615e5e-af1f-4503-b367-2d267fdf3106"},{"uid":"4d85d49d-b5b9-425c-9c23-f557ac1749dc","sectionTitle":"About Us Section","linkId":"16703447-7874-4089-b9a3-1dce1adb1a47"},{"uid":"4742500a-4bc1-4e6f-8d41-6ec320f58355","sectionTitle":"Our Team","linkId":"a378f707-2aca-4a73-9be6-e7349939ee60"},{"uid":"9b25c215-7c62-4634-99c3-4d16a1e686a1","sectionTitle":"Our Mission","linkId":"a43e5b07-2ca3-460a-9ca2-3557105c884c"},{"uid":"be00f8af-528d-4a63-8b61-e3f15926d766","sectionTitle":"Contact Us","linkId":"a2d5d533-efa8-46ce-9de0-fcd1186fe7af"},{"uid":"d65bf7db-b6d1-47f6-b3c0-af12fde0e963","sectionTitle":"Footer Section","linkId":"63b38708-e1df-4c70-96e4-6d4de2060a1f"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"1b656a3b-08ae-401b-a492-8e2602a9587d","linkId":"1b656a3b-08ae-401b-a492-8e2602a9587d","name":"Property","folder":null,"paths":{"en":"property","default":"property"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f246319e-758a-4b32-83fa-bd43f93ec718","sectionTitle":"Nav bar","linkId":"39615e5e-af1f-4503-b367-2d267fdf3106"},{"uid":"c78b9158-0083-42b8-a12f-384a8f86b482","sectionTitle":"Modal","linkId":"2db24984-ca31-4b18-8ed1-00f494a14779"},{"uid":"9b22007d-6b48-4d83-8b93-aa2c771ec738","sectionTitle":"Section","linkId":"98358b48-93cf-4635-b1da-c5bed4585f9c"},{"uid":"d65bf7db-b6d1-47f6-b3c0-af12fde0e963","sectionTitle":"Footer Section","linkId":"63b38708-e1df-4c70-96e4-6d4de2060a1f"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"7627ebe3-8284-4f74-8ffc-640d60360a66","linkId":"7627ebe3-8284-4f74-8ffc-640d60360a66","name":"Login","folder":null,"paths":{"en":"login","default":"login"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f246319e-758a-4b32-83fa-bd43f93ec718","sectionTitle":"Nav bar","linkId":"39615e5e-af1f-4503-b367-2d267fdf3106"},{"uid":"9f185bce-7716-487a-baba-5534912a1c73","sectionTitle":"Login","linkId":"f471c785-a0ef-4b49-8ec6-4d87a6b5ca41"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"cd33cf33-e29f-4e8c-ac26-b997fe507ce7","name":"Xano","namespace":"xano"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 1;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
