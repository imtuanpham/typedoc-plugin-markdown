import { DeclarationReflection, Options, ProjectReflection, ReflectionCategory, ReflectionGroup } from 'typedoc';
import { NavigationItem } from '../theme/models';
export declare class NavigationBuilder {
    options: Options;
    navigation: NavigationItem[];
    constructor(options: Options);
    getNavigation(project: ProjectReflection): NavigationItem[];
    getCategoryGroupChildren(group: ReflectionCategory): any;
    getGroupChildren(group: ReflectionGroup): any;
    getChildrenOrGroups(reflection: DeclarationReflection): any;
}
