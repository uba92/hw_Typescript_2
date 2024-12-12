interface IResult {
    id:           number;
    title:        string;
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: string;
    updated_at:   Date;
    featured:     boolean;
    launches:     object[];
    events:       object[];
}

export default IResult