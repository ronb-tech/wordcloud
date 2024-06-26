import data1 from "@/service/data/data1.json";
import data2 from "@/service/data/data2.json";
import data3 from "@/service/data/data3.json";
import { getConcept, groupByConcept } from "@/utils/format.js";

const demoFetch = (fileData, delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!fileData) {
        reject(new Error(`fileData is required to fetch`));
      } else {
        resolve(fileData);
      }
    }, delay);
  });
};

export const getWordCloudData = async () => {
  const filePromises = [
    demoFetch(data1, 1000),
    demoFetch(data2, 1200),
    demoFetch(data3, 1500),
  ];
  return Promise.allSettled(filePromises).then((results) => {
    let combinedData = [];
    results.forEach((result) => {
      console.log("res", result);
      if (result.status === "fulfilled") {
        combinedData = [...combinedData, ...result.value.items];
      } else {
        console.error("Error fetching data:", result.reason);
      }
    });
    const groupByData = groupByConcept(combinedData);

    return groupByData;
  });
};
