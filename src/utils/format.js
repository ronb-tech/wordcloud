const keyMappings = {
  entityTitle: "text",
  count: "value",
  entityId: "id",
  entityConcept: "concept",
};

export const configGraph = {
  wordField: "text",
  weightField: "value",
  wordStyle: {
    rotationSteps: 4,
    fontSize: [10, 100],
    active: {
      shadowColor: "#333333",
      shadowBlur: 10,
    },
    gridSize: 8,
  },
  shape: "cardioid",
  shuffle: false,
  backgroundColor: "#fff",
  tooltip: {
    visible: true,
  },
  selected: -1,
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

export const groupByConcept = (items) => {
  const grouped = {};
  items.forEach((item) => {
    const entityConceptObj = item.values.find((v) => v.key === "entityConcept");
    if (entityConceptObj) {
      const concept = getConcept(entityConceptObj.value);
      if (!grouped[concept]) {
        grouped[concept] = [];
      }
      grouped[concept].push(item);
    }
  });

  const sortedKeys = Object.keys(grouped).sort(
    (a, b) => grouped[b].length - grouped[a].length
  );

  const sortedGrouped = sortedKeys.reduce((acc, key) => {
    acc[key] = grouped[key];
    return acc;
  }, {});

  console.log("sortedGrouped", sortedGrouped);
  return sortedGrouped;
};
