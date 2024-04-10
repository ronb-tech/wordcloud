const keyMappings = {
  entityTitle: "title",
  count: "count",
  entityId: "id",
  entityConcept: "concept",
};

const transformArrayToObject = (array) => {
  return array.reduce((acc, { key, value }) => {
    if (keyMappings[key]) {
      acc[keyMappings[key]] = value;
    }
    return acc;
  }, {});
};

export const getConcept = (url) => {
  return url?.split("#")[1] || "unknown";
};

export const transformedArray = (data) => {
  return data?.map((item) => {
    return transformArrayToObject(item?.values);
  });
};
