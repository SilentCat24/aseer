export const getAuditById = (id) => {
  if (id === 1)
    return {
      auditId: 1,
      auditName: "changing",
      auditCreatedBy: "ashwini",
      auditCreatedDate: "2022-08-09T04:20:59.935Z",
      auditPurpose: "test",
      auditStatus: true,
    };
  if (id === 2)
    return {
      auditId: 2,
      auditName: "bbb",
      auditCreatedBy: "ananya",
      auditCreatedDate: "2022-08-09T04:21:35.165Z",
      auditPurpose: "test",
      auditStatus: false,
    };
  if (id === 3)
    return {
      auditId: 3,
      auditName: "athu",
      auditCreatedBy: "atharva",
      auditCreatedDate: "2022-08-09T04:23:11.333Z",
      auditPurpose: "testing",
      auditStatus: true,
    };
  if (id === 4)
    return {
      auditId: 4,
      auditName: "doc1",
      auditCreatedBy: "sam",
      auditCreatedDate: "2022-08-09T10:18:10.954Z",
      auditPurpose: "testing",
      documentStatus: true,
    };
  if (id === 5)
    return {
      auditId: 5,
      auditName: "doc2",
      auditCreatedBy: "abc",
      auditCreatedDate: "2022-08-09T12:15:14.902Z",
      auditPurpose: "testing1",
      documentStatus: true,
    };
  if (id === 6)
    return {
      auditId: 6,
      auditName: "doc3",
      auditCreatedBy: "abcd",
      auditCreatedDate: "2022-08-10T05:29:17.556Z",
      auditPurpose: "testing2",
      documentStatus: true,
    };
};
