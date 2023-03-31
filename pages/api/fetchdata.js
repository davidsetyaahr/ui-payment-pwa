export var baseUrl = "http://127.0.0.1:8000/api/";

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