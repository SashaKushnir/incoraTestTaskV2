export type UsersArrayType = Array<UserType>

export interface UserType {
    address: AddressType
    street: string
    suite: string
    zipcode: string
    company: CompanyType
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
}

export interface AddressType {
    city: string
    geo: Geo
    lat: string
    lng: string
}

export interface CompanyType {
    bs: string
    catchPhrase: string
    name: string
}
export interface Geo {
    lat:string
    lng: string
}