import { applyFilterLogic } from "../utils/filter.js";
describe("Фильтр", () => {

  const places = [
    { time: "day", type: "food", people:[1,2] },
    { time: "night", type: "entertainment", people:[5] }
  ];

  test("Фильтр по времени", () => {
    const res = applyFilterLogic(places, { time: "День" });
    expect(res.length).toBe(1);
  });

});