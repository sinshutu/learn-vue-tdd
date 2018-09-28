import { shallowMount } from "@vue/test-utils";
import AddTodo from "@/components/AddTodo.vue";

describe("AddTodo.vue", () => {
  it("input textを持っている", () => {
    const wrapper = shallowMount(AddTodo);
    expect(wrapper.find("input.add").exists()).toBe(true);
  });
  it("追加ボタンを押してemitする", () => {
    const text = "todo";
    const wrapper = shallowMount(AddTodo);
    wrapper.setData({ text });
    wrapper.find("input.add").trigger("keyup.enter");

    // emitted の配列には
    // emitted("Event Name")[emitが呼ばれた順番][引数]
    // のような内容が入っている
    expect(wrapper.emitted("addTodo")[0][0]).toBe(text);
  });
  it("emitされたときinputが空になる", () => {
    const text = "todo";
    const wrapper = shallowMount(AddTodo);
    wrapper.setData({ text });
    wrapper.find("input.add").trigger("keyup.enter");
    expect(wrapper.vm.text).toBe("");
  });
});
