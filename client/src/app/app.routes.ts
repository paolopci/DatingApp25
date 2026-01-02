import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { MemberList } from './features/members/member-list/member-list';
import { MemberDetailed } from './features/members/member-detailed/member-detailed';
import { Lists } from './features/lists/lists/lists';
import { Messages } from './features/messages/messages/messages';
import { TestErrors } from './features/test-errors/test-errors';
import { authGuard } from './core/guards/auth.guard';
import { NotFound } from './features/errors/not-found/not-found';
import { ServerError } from './features/errors/server-error/server-error';

export const routes: Routes = [
    {path: '', component: Home},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            {path: 'members', component: MemberList},
            {path: 'members/:id', component: MemberDetailed},
            {path: 'lists', component: Lists},
            {path: 'messages', component: Messages},
        ]
    },
    {path: 'test-errors', component: TestErrors},
    {path: 'not-found', component: NotFound},
    {path: 'server-error', component: ServerError},
    {path: '**', component: NotFound, pathMatch: 'full'},
];
