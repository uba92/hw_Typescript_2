import IResult from "./Results";
interface IResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  IResult[];
}


export default IResponse