import data1 from "@/service/data/data1.json";
import data2 from "@/service/data/data2.json";
import data3 from "@/service/data/data3.json";

const demoFetch = (fileData, delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!fileData) {
        reject(`fileData is required to fetch`);
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
    const combinedData = [];
    let hadError = false;

    results.forEach((result) => {
      if (result.status === "fulfilled") {
        combinedData.push({ ...result.value });
      } else {
        hadError = true;
        console.error("Error fetching data:", result.reason);
      }
    });
    console.log("combinedData", combinedData);
    return combinedData;
  });
};
