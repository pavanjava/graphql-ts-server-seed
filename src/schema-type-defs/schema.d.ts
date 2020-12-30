// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | IMutation;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
__typename: "Query";
users: Array<IUser> | null;
userById: IUser | null;
}

interface IUserByIdOnQueryArguments {
id?: number | null;
}

interface IUser {
__typename: "User";
id: number | null;
firstName: string | null;
lastName: string | null;
email: string | null;
password: string | null;
}

interface IMutation {
__typename: "Mutation";
register: IUser | null;
}

interface IRegisterOnMutationArguments {
firstName: string;
lastName: string;
email: string;
password: string;
}
}

// tslint:enable
