import React from "react";
import { shallow } from "enzyme";
import TestRedux from "./TestRedux";

describe("TestRedux", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TestRedux />);
    expect(wrapper).toMatchSnapshot();
  });
});
