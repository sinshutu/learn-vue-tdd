import { shallowMount } from "@vue/test-utils";
import TodoItem from "@/components/TodoItem.vue";

describe("TodoItem.vue", () => {
  it("Todoを表示する", () => {
    const text = "todo";
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        id: 1,
        text,
        checked: false
      }
    });
    expect(wrapper.find("span.item").exists()).toBe(true);
    expect(wrapper.find("span.item").text()).toBe(text);
    expect(wrapper.find("input:checked").exists()).toBe(false);
  });
  it("クリックイベントをemitする", () => {
    const id = 1;
    const text = "todo";
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        id: id,
        text,
        checked: false
      }
    });
    wrapper.find("input[type='radio']").trigger("click");
    expect(wrapper.emitted("toggleChecked")[0][0]).toBe(id);
  });
});
