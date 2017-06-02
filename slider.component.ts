import { SliderOption } from './../models/SliderOption';
import { CoverageModel } from './../models/CoverageModel';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'slider',
    inputs: ['slider-values', 'default'], //SLIDER OPTIONS INPUT
    outputs: ['slide-changed'], //SLIDER VALUE CHANGED OUTPUT
    templateUrl: 'slider.component.html',
    styleUrls: ['slider.component.css']
})
export class SliderComponent implements OnInit {

    @Input('slider-values') sliderValues: any;
    @Input('default') default: string;
    @Output('slide-changed') sliderValueChanged = new EventEmitter<SliderOption>();
    maxRangeValue: number;
    currentValue: number = 0;
    sliderBody: any;
    color: string = "#000";
    constructor() {
    }

    ngOnInit() {
        //get maximum range value
        this.maxRangeValue = this.sliderValues.length - 1;

        for (var i = 0; i < this.sliderValues.length; i++) {
            var element = this.sliderValues[i];
            if (element.value == this.default) {
                this.currentValue = i;
            }
        }

        this.sliderBody =
            document.querySelector('input[type=range]');
    }

    addValue() {
        //plus click
        if (this.currentValue < this.maxRangeValue) {
            this.currentValue++;
            this.valueChanged()
        }
    }

    deductValue() {
        //minus click
        if (this.currentValue > 0) {
            this.currentValue--;
            this.valueChanged()
        }
    }

    getGradient(): any {
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        var edge = ua.indexOf('Edge/');

        if (edge > -1) {
            return { "margin": "7px 0 0 0",
                     "height": "20px" }
        }
        else if (trident > -1) {
            return { "margin-top": "-6px",
                     "height": "initial" }
        }
        else {
            var gradientStep = ((this.currentValue / this.maxRangeValue) * 100);
            return {
                "background": "linear-gradient(to right, #3A5A78 0%, #3A5A78 " + gradientStep + "%, #F6F6F6 " + gradientStep + "%, #F6F6F6 100%)",
                "height": "13px"
            };
        }
    }

    valueChanged() {
        //emit a value to the listener (parent component)        
        var currentValue = this.sliderValues[this.currentValue];
        this.sliderValueChanged.emit(currentValue);
    }
}