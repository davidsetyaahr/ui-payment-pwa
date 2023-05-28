import { baseUrl, baseStorageUrl } from "@/helper/baseUrl";

export const getMyPoint = async ({ data, perPage = 10 }, callback) => {
  const id = data.id;
  var url = `${baseUrl}myPoint/${id}?perpage=${perPage}`;
  if (data.startDate != "" && data.endDate != "") {
    url = `${url}&start=${data.startDate}&end=${data.endDate}`;
  }

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    method: "GET",
  });
  const result = await res.json();

  callback(result);
};

export const getHistoryPayment = async ({ data, perPage = 10 }, callback) => {
  const id = data.id;
  var url = `${baseUrl}payment/history/${id}?perpage=${perPage}`;
  if (data.startDate != "" && data.endDate != "") {
    url = `${url}&start=${data.startDate}&end=${data.endDate}`;
  }

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    method: "GET",
  });
  const result = await res.json();

  callback(result);
};

export const getDetailPayment = async ({ data }, callback) => {
  const id = data.id;
  var url = `${baseUrl}payment/detail/${id}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    method: "GET",
  });
  const result = await res.json();

  callback(result);
};

export const getPrintReceipt = async ({ data }, callback) => {
  const id = data.id;
  var url = `${baseUrl}payment/printInvoice/${id}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    method: "GET",
  });

  const result = await res.blob();

  callback(result);
};

export const getListBill = async ({ data }, callback) => {
  const id = data.id;
  var url = `${baseUrl}payment/billing/${id}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    method: "GET",
  });
  const result = await res.json();

  callback(result);
};

// update todo attend
// update filter
// attend
export const getClassItem = async ({ data }, callback) => {
  const id = data.id;
  var url = `${baseUrl}classItem/${id}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    method: "GET",
  });
  const result = await res.json();

  callback(result);
};

export const getAttend = async ({ data, perPage = 10 }, callback) => {
  const id = data.id;
  var url = `${baseUrl}attendace/${id}?perpage=${perPage}`;

  if (data.classSelected !== 0) {
    url = `${url}&class=${data.classSelected}`;
  }
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    method: "GET",
  });
  const result = await res.json();

  callback(result);
};

export const getSummaryStudent = async ({ data }, callback) => {
  const id = data.id;
  var url = `${baseUrl}summaryStudent/${id}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    method: "GET",
  });
  const result = await res.json();

  callback(result);
};

export const getResultScore = async ({ data }, callback) => {
  const id = data.id;
  var url = `${baseUrl}score/getResult/${id}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    method: "GET",
  });
  const result = await res.json();

  callback(result);
};

export const getScoreByTest = async ({ data }, callback) => {
  const id = data.id;
  const idTest = data.idTest;
  var url = `${baseUrl}score/getScore/${id}/${idTest}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    method: "GET",
  });
  const result = await res.json();

  callback(result);
};

export const checkOutBill = async (payload, callback) => {
  const res = await fetch(baseUrl + "payment/checkout", {
    body: JSON.stringify(payload.body),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    method: "POST",
  });

  const result = await res.json();

  callback(result);
};

export const verifyPayment = async ({ data }, callback) => {
  const id = data.id;
  var url = `${baseUrl}payment/verify/${id}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    method: "GET",
  });
  const result = await res.json();

  callback(result);
};

export const getBillMonth = async ({ data }, callback) => {
  const id = data.id;
  var url = `${baseUrl}payment/get-bill-month/${id}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    method: "GET",
  });
  const result = await res.json();

  callback(result);
};
