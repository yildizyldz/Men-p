// Db.json'dan verileri alan fonksiyon
export const fetchMenu = async () => {
  // Fetch ile db.json'dan veriler alındı
  const res = await fetch("../db.json");

  const data = await res.json();
  console.log(data);

  return data;
};
