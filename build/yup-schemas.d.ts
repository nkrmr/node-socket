import * as yup from 'yup';
export declare const emailSchema: import("yup/lib/object").OptionalObjectSchema<{
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>;
export declare const passwordSchema: import("yup/lib/object").OptionalObjectSchema<{
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>;
export declare const confirmPasswordSchema: import("yup/lib/object").OptionalObjectSchema<{
    confirmPassword: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    confirmPassword: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>;
export declare const loginSchema: yup.ObjectSchema<{
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>, import("yup/lib/object").AssertsShape<{
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>;
export declare const googleLoginSchema: import("yup/lib/object").OptionalObjectSchema<{
    idToken: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    idToken: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>;
export declare const appleLoginSchema: import("yup/lib/object").OptionalObjectSchema<{
    idToken: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    nonce: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    firstName: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
    name: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    idToken: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    nonce: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    firstName: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
    name: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
}>>;
export declare const loginAsClientSchema: import("yup/lib/object").OptionalObjectSchema<{
    clientId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    clientId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>;
export declare const clientSignupSchema: yup.ObjectSchema<import("yup/lib/object").Assign<{
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    confirmPassword: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    birthdate: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    first_name: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    address: import("yup/lib/object").OptionalObjectSchema<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }> | null>;
    phone: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    picture_id: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
}, {
    name: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<{
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    confirmPassword: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    birthdate: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    first_name: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    address: import("yup/lib/object").OptionalObjectSchema<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }> | null>;
    phone: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    picture_id: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
}, {
    name: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<{
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    confirmPassword: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    birthdate: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    first_name: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    address: import("yup/lib/object").OptionalObjectSchema<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }> | null>;
    phone: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    picture_id: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
}, {
    name: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>>;
export declare const userSignupSchema: yup.ObjectSchema<import("yup/lib/object").Assign<{
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    confirmPassword: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    birthdate: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    first_name: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    address: import("yup/lib/object").OptionalObjectSchema<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }> | null>;
    phone: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    picture_id: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
}, {
    name: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<{
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    confirmPassword: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    birthdate: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    first_name: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    address: import("yup/lib/object").OptionalObjectSchema<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }> | null>;
    phone: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    picture_id: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
}, {
    name: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<{
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    confirmPassword: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    birthdate: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    first_name: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    address: import("yup/lib/object").OptionalObjectSchema<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }> | null>;
    phone: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    picture_id: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
}, {
    name: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
}>>>;
export declare const userUpdateSchema: yup.ObjectSchema<{
    email: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
    name: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
} & {
    birthdate: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    first_name: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    address: import("yup/lib/object").OptionalObjectSchema<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }> | null>;
    phone: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    picture_id: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    email: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
    name: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
} & {
    birthdate: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    first_name: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    address: import("yup/lib/object").OptionalObjectSchema<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }> | null>;
    phone: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    picture_id: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
}>, import("yup/lib/object").AssertsShape<{
    email: yup.StringSchema<string | undefined, Record<string, any>, string | undefined>;
    name: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
} & {
    birthdate: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    first_name: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    address: import("yup/lib/object").OptionalObjectSchema<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        data: import("yup/lib/object").RequiredObjectSchema<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
            address: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            city: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            zipcode: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
            country: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
        }>>;
    }> | null>;
    phone: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
    picture_id: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>>;
}>>;
export declare const newPasswordSchema: yup.ObjectSchema<{
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    confirmPassword: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    confirmPassword: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>, import("yup/lib/object").AssertsShape<{
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    confirmPassword: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>;
export declare const resetTokenSchema: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
export declare const resetPasswordSchema: yup.ObjectSchema<import("yup/lib/object").Assign<{
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    confirmPassword: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}, {
    resetTokenId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<{
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    confirmPassword: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}, {
    resetTokenId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<{
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
} & {
    confirmPassword: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}, {
    resetTokenId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>>;
export declare const playGameSchema: import("yup/lib/object").OptionalObjectSchema<{
    gameId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    gameId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>;
export declare const playQuizzSchema: import("yup/lib/object").OptionalObjectSchema<{
    gameId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    score: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    time: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    gameId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    score: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    time: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
}>>;
export declare const playVoteSchema: import("yup/lib/object").OptionalObjectSchema<{
    gameId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    results: import("yup/lib/array").RequiredArraySchema<yup.AnySchema<any, any, any>, Record<string, any>, any[] | undefined>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    gameId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    results: import("yup/lib/array").RequiredArraySchema<yup.AnySchema<any, any, any>, Record<string, any>, any[] | undefined>;
}>>;
export declare const randomDrawingSchema: import("yup/lib/object").OptionalObjectSchema<{
    gameId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    gains: import("yup/lib/array").RequiredArraySchema<import("yup/lib/object").RequiredObjectSchema<{
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        quantity: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        quantity: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }>>, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        quantity: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }>[] | undefined>;
    dateStart: yup.DateSchema<Date | null | undefined, Record<string, any>, Date | null | undefined>;
    dateEnd: yup.DateSchema<Date | null | undefined, Record<string, any>, Date | null | undefined>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    gameId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    gains: import("yup/lib/array").RequiredArraySchema<import("yup/lib/object").RequiredObjectSchema<{
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        quantity: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        quantity: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }>>, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        quantity: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }>[] | undefined>;
    dateStart: yup.DateSchema<Date | null | undefined, Record<string, any>, Date | null | undefined>;
    dateEnd: yup.DateSchema<Date | null | undefined, Record<string, any>, Date | null | undefined>;
}>>;
export declare const quizzRandomDrawingSchema: yup.ObjectSchema<import("yup/lib/object").Assign<{
    gameId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    gains: import("yup/lib/array").RequiredArraySchema<import("yup/lib/object").RequiredObjectSchema<{
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        quantity: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        quantity: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }>>, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        quantity: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }>[] | undefined>;
    dateStart: yup.DateSchema<Date | null | undefined, Record<string, any>, Date | null | undefined>;
    dateEnd: yup.DateSchema<Date | null | undefined, Record<string, any>, Date | null | undefined>;
}, {
    minScore: yup.NumberSchema<import("yup/lib/types").Maybe<number>, Record<string, any>, import("yup/lib/types").Maybe<number>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<{
    gameId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    gains: import("yup/lib/array").RequiredArraySchema<import("yup/lib/object").RequiredObjectSchema<{
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        quantity: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        quantity: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }>>, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        quantity: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }>[] | undefined>;
    dateStart: yup.DateSchema<Date | null | undefined, Record<string, any>, Date | null | undefined>;
    dateEnd: yup.DateSchema<Date | null | undefined, Record<string, any>, Date | null | undefined>;
}, {
    minScore: yup.NumberSchema<import("yup/lib/types").Maybe<number>, Record<string, any>, import("yup/lib/types").Maybe<number>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<{
    gameId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    gains: import("yup/lib/array").RequiredArraySchema<import("yup/lib/object").RequiredObjectSchema<{
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        quantity: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        quantity: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }>>, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        quantity: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }>[] | undefined>;
    dateStart: yup.DateSchema<Date | null | undefined, Record<string, any>, Date | null | undefined>;
    dateEnd: yup.DateSchema<Date | null | undefined, Record<string, any>, Date | null | undefined>;
}, {
    minScore: yup.NumberSchema<import("yup/lib/types").Maybe<number>, Record<string, any>, import("yup/lib/types").Maybe<number>>;
}>>>;
export declare const playGoodieSchema: import("yup/lib/object").OptionalObjectSchema<{
    goodieId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    goodieId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>;
export declare const magicSchema: import("yup/lib/object").OptionalObjectSchema<{
    room: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    gameId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    gainId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    room: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    gameId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    gainId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>;
