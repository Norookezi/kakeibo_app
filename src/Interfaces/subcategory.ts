export interface subcategory{
    id: number;
    name: string;
    iconId: number | null;
    color: string;
    creationDate: Date;
    updateDate: Date;
    parentId: number;
    userId: number;
    userGroupsId: number | null;
}