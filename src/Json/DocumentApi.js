export const getDocumentById = (id) => {
  if (id === 1)
    return {
      documentId: 1,
      documentName: "valuechanged1",
      documentCreatedBy: "user1",
      documentCreatedDate: "2022-08-09T04:05:45.798Z",
      reasonForCreation: "test",
      documentStatus: true,
    };
  if (id === 2)
    return {
      documentId: 2,
      documentName: "doc2",
      documentCreatedBy: "ashwi",
      documentCreatedDate: "2022-08-09T04:05:45.798Z",
      reasonForCreation: "testingupdate",
      documentStatus: true,
    };
  if (id === 3)
    return {
      documentId: 3,
      documentName: "valuechanged2",
      documentCreatedBy: "user1",
      documentCreatedDate: "2022-08-09T04:13:37.805Z",
      reasonForCreation: "testing",
      documentStatus: true,
    };
  if (id === 4)
    return {
      documentId: 4,
      documentName: "doc1",
      documentCreatedBy: "sam",
      documentCreatedDate: "2022-08-09T10:18:10.954Z",
      reasonForCreation: "testing",
      documentStatus: true,
    };
  if (id === 5)
    return {
      documentId: 5,
      documentName: "doc2",
      documentCreatedBy: "abc",
      documentCreatedDate: "2022-08-09T12:15:14.902Z",
      reasonForCreation: "testing1",
      documentStatus: true,
    };
  if (id === 6)
    return {
      documentId: 6,
      documentName: "doc3",
      documentCreatedBy: "abcd",
      documentCreatedDate: "2022-08-10T05:29:17.556Z",
      reasonForCreation: "testing2",
      documentStatus: true,
    };
};
