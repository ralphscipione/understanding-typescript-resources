// Intersection types

// type FileData = {
//     path: string;
//     content: string;
// };

// type DatabaseData = {
//     connectionUrl: string;
//     credentials: string;
// };

// type Status = {
//     isOpen: boolean;
//     errorMessage?: string;
// };

// type AccessedFileData = FileData & Status;
// type AccessedDatabaseData = DatabaseData & Status

/*
 * same as above
 */
interface FileData2 {
    path: string;
    content: string;
};

interface DatabaseData2 {
    connectionUrl: string;
    credentials: string;
};

interface Status2 {
    isOpen: boolean;
    errorMessage?: string;
};

interface AccessedFileData2 extends FileData2, Status2{};
interface AccessedDatabaseData2 extends DatabaseData2, Status2{};