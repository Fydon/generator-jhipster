import { ErrorComponent } from './error.component';
import { <%=jhiPrefixCapitalized%>LanguageService } from '../../shared';

export const errorState = {
    name: 'error',
    parent: 'app',
    url: '/error',
    data: {
        authorities: [],
        pageTitle: 'error.title'
    },
    views: {
        'content@': { component: ErrorComponent }
    },
    resolve: [{
        token: 'translate',
        deps: [<%=jhiPrefixCapitalized%>LanguageService],
        resolveFn: (languageService) => languageService.setLocations(['error'])
    }]
}

export const accessdeniedState = {
    name: 'accessdenied',
    parent: 'app',
    url: '/accessdenied',
    data: {
        authorities: []
    },
    views: {
        'content@': { component: ErrorComponent }
    },
    resolve: [{
        token: 'translate',
        deps: [<%=jhiPrefixCapitalized%>LanguageService],
        resolveFn: (languageService) => languageService.setLocations(['error'])
    }]
}
