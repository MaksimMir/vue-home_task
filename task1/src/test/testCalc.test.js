import Calculator from '../components/Calculator.vue';
import { mount } from '@vue/test-utils';

describe('Calculator test data', () => {
    it('test operand1 in input', () => {
        const wrapper = mount(Calculator);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(1)

        expect(wrapper.vm.first_number).toBe(1);
    })

    it('test operand2 in input', () => {
        const wrapper = mount(Calculator);
        const op1 = wrapper.find('input[name=op2]');
        op1.setValue(2)

        expect(wrapper.vm.second_number).toBe(2);
    })
})

describe('Calculator test operation', () => {
    it('test operation sum', () => {
        const wrapper = mount(Calculator);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(1);
        const op2 = wrapper.find('input[name=op2]');
        op2.setValue(2);
        const btnSum = wrapper.find('.sum');
        btnSum.trigger('click');


        expect(wrapper.vm.result).toBe(3);
    })

    it('test operand2 in input', () => {
        const wrapper = mount(Calculator);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(1);
        const op2 = wrapper.find('input[name=op2]');
        op2.setValue(2);
        const btnSum = wrapper.find('.dev');
        btnSum.trigger('click');

        expect(wrapper.vm.result).toBe(-1);
    })

    it('test operand2 in input', () => {
        const wrapper = mount(Calculator);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(1);
        const op2 = wrapper.find('input[name=op2]');
        op2.setValue(2);
        const btnSum = wrapper.find('.mul');
        btnSum.trigger('click');

        expect(wrapper.vm.result).toBe(2);
    })

    it('test operand2 in input', () => {
        const wrapper = mount(Calculator);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(1);
        const op2 = wrapper.find('input[name=op2]');
        op2.setValue(2);
        const btnSum = wrapper.find('.def');
        btnSum.trigger('click');

        expect(wrapper.vm.result).toBe(0.5);
    })

    it('test operand2 in input', () => {
        const wrapper = mount(Calculator);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(1);
        const op2 = wrapper.find('input[name=op2]');
        op2.setValue(0);
        const btnSum = wrapper.find('.def');
        btnSum.trigger('click');

        expect(wrapper.vm.result).toBe(
            'Делитель должен быть больше нуля'
        );
    })

    it('test operand2 in input', () => {
        const wrapper = mount(Calculator);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(1);
        const op2 = wrapper.find('input[name=op2]');
        op2.setValue(2);
        const btnSum = wrapper.find('.exp');
        btnSum.trigger('click');

        expect(wrapper.vm.result).toBe(1);
    })

    it('test operand2 in input', () => {
        const wrapper = mount(Calculator);
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue(1);
        const op2 = wrapper.find('input[name=op2]');
        op2.setValue(-1);
        const btnSum = wrapper.find('.exp');
        btnSum.trigger('click');

        expect(wrapper.vm.result).toBe(
            'Некорректное значение'
        );
    })
})