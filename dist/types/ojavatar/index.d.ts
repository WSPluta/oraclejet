import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojAvatar extends JetElement<ojAvatarSettableProperties> {
    background: 'neutral' | 'red' | 'orange' | 'forest' | 'green' | 'teal' | 'mauve' | 'purple';
    initials: string;
    size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    src: string;
    addEventListener<T extends keyof ojAvatarEventMap>(type: T, listener: (this: HTMLElement, ev: ojAvatarEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojAvatarSettableProperties>(property: T): ojAvatar[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojAvatarSettableProperties>(property: T, value: ojAvatarSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojAvatarSettableProperties>): void;
    setProperties(properties: ojAvatarSettablePropertiesLenient): void;
}
export namespace ojAvatar {
    // tslint:disable-next-line interface-over-type-literal
    type backgroundChanged = JetElementCustomEvent<ojAvatar["background"]>;
    // tslint:disable-next-line interface-over-type-literal
    type initialsChanged = JetElementCustomEvent<ojAvatar["initials"]>;
    // tslint:disable-next-line interface-over-type-literal
    type sizeChanged = JetElementCustomEvent<ojAvatar["size"]>;
    // tslint:disable-next-line interface-over-type-literal
    type srcChanged = JetElementCustomEvent<ojAvatar["src"]>;
}
export interface ojAvatarEventMap extends HTMLElementEventMap {
    'backgroundChanged': JetElementCustomEvent<ojAvatar["background"]>;
    'initialsChanged': JetElementCustomEvent<ojAvatar["initials"]>;
    'sizeChanged': JetElementCustomEvent<ojAvatar["size"]>;
    'srcChanged': JetElementCustomEvent<ojAvatar["src"]>;
}
export interface ojAvatarSettableProperties extends JetSettableProperties {
    background: 'neutral' | 'red' | 'orange' | 'forest' | 'green' | 'teal' | 'mauve' | 'purple';
    initials: string;
    size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    src: string;
}
export interface ojAvatarSettablePropertiesLenient extends Partial<ojAvatarSettableProperties> {
    [key: string]: any;
}
