export interface categoryType {
    id: number;
    category: string;
}

export interface bookmarktList {
    id:number,
    title: string;
    url: string;
    category: categoryType;
}