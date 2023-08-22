// @vitest-environment jsdom
import { describe, expect, test, it } from "vitest"
import { shallowMount } from "@vue/test-utils"
import Button from '../packages/button/index.vue'

describe("Button", () => {
  it("能够渲染 button", () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.html()).toContain("button")
  })
  it("Button slot 内容正确", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "按钮"
      }
    })
    expect(wrapper.html()).toContain("按钮")
  })
  // 测试  props 传值是否正确
  it("Button props 传值正确", () => {
    const wrapper = shallowMount(Button, {
      props: {
        theme: "primary",
        status: "success",
        size: "small",
        shape: "circle",
        block: true,
        loading: true,
        disabled: true
      }
    })
    expect(wrapper.classes()).toContain("primary")
    expect(wrapper.classes()).toContain("success")
    expect(wrapper.classes()).toContain("small")
    expect(wrapper.classes()).toContain("circle")
    expect(wrapper.classes()).toContain("any-button-block")
    expect(wrapper.html()).toContain("svg")
    expect(wrapper.find("svg").classes()).toContain("icon-loading")
    expect(wrapper.attributes()).toHaveProperty("disabled")
  })
  // 测试 click 事件是否触发
  it("Button click 事件触发", async () => {
    const wrapper = shallowMount(Button)
    await wrapper.trigger("click")
    expect(wrapper.emitted()).toHaveProperty("click")
  })
})
