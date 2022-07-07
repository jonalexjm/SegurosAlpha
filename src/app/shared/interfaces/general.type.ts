export interface User{
    nikacc? : string;
    pswacc? : string;
    freacc? : string;
    estacc? : boolean;
    _links? : links;
}

export interface links{
    acceso: string;​​​
    iderol: string;
​​​    ideusr: string;
​​​    self: string;
}


export interface UserDetail{
    epsusr? : string;
    docusr? : string;
    pnousr? : string;
    snousr? : string;
    papusr? : string;
    sapusr? : string;
    emlusr? : string;
    sexusr? : string;
    fnausr? : string;
    dirusr? : string;
    telusr? : string;
    extusr? : string;
    fotusr? : string;
    notusr? : string;
    estusr? : string;
}