import { shallowMount } from '@vue/test-utils';
import Click from '@/components/Click.vue';

describe('Click.vue', () => {
  it('点击按钮后数值加一', () => {

    const wrapper = shallowMount(Click);

    // 点击按钮后，count +1
    wrapper.find('#inc').trigger('click');
    expect(wrapper.vm.$data.count).toBe(1);

    // 点击按钮后，count -1
    wrapper.find('#dec').trigger('click');
    expect(wrapper.vm.$data.count).toBe(0);
  });
});
