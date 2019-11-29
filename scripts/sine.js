/* from https://gist.github.com/anandpdoshi/9f1ad2503f9da99b13090eb6502ace45 */

$(function() {
    setup();
    render_x_axis();
    render_y_axis();
    render_sine_wave();
    render_phase_circle();
    render_frequency_bar();
    render_frequency_indicator();
});

function setup() {
    // configuration for canvas
    window.config = {
        x_offset: 30,
        y_offset: 10,
        amplitude_scaling_factor: 20,

        min_frequency: 50,
        max_frequency: 400,

        min_amplitude: 0.5,
        max_amplitude: 6,

        min_phase: -360,
        max_phase: 360
    };

    config.width = view.size.width - 2 * config.x_offset - 10;
    config.height = view.size.height - 2 * config.y_offset;
    config.startx = config.x_offset;
    config.starty = config.y_offset + config.height / 2;

    // changeable params
    window.params = {
        frequency: 50,
        amplitude: 3,
        phase: 0
    };

    params.scaled_amplitude = params.amplitude * config.amplitude_scaling_factor;
    config.min_scaled_amplitude = config.min_amplitude * config.amplitude_scaling_factor;
    config.max_scaled_amplitude = config.max_amplitude * config.amplitude_scaling_factor;
};

function render_x_axis() {
    // x-axis & ticks
    var x_axis = new Path.Line(
    	new Point(config.startx, config.starty),
    	new Point(config.width + 3 * config.x_offset, config.starty)
    );
    x_axis.strokeColor = 'black';

    var tmax = 1 / config.min_frequency;
    var tlength = config.width + 2 * config.x_offset;
    var tres = 0.005;
    var tstep = (tmax / tres);
    var lstep = config.width / tstep
    var max_count = tstep + 1;

    for (var count=0; count <= max_count; count++) {
    	var tick = new Path.Line({
    		from: [config.x_offset + count * lstep, config.starty - 5],
    		to: [config.x_offset + count * lstep, config.starty + 5],
    		strokeColor: 'black'
    	});

    	if (count > 0) {
    		var text = new PointText(tick.lastSegment.point);
    		text.fillColor = 'black';
    		text.content = count * tres;
            text.justification = 'center';
    		text.position.y += 15;
    	}
    }
}

function render_y_axis() {
    // y-axis & ticks
    var y_axis = new Path.Line(
    	new Point(config.startx, config.y_offset),
    	new Point(config.startx, config.y_offset + config.height)
    );
    y_axis.strokeColor = 'black';

    var ytick = function(amp) {
        var tick = new Path.Line({
    		from: [config.x_offset - 5, config.starty - amp],
    		to: [config.x_offset + 5, config.starty - amp],
    		strokeColor: 'black'
    	});

        var text = new PointText(tick.lastSegment.point);
        text.fillColor = 'black';
        text.content = amp / config.amplitude_scaling_factor;

        text.position.y += 4;
        text.position.x -= 15;
        text.justification = 'right';
    }

    var y_step = config.max_scaled_amplitude / 4;
    for (var amp=0; amp <= config.max_scaled_amplitude; amp = amp + y_step) {
        // +ve tick
        ytick(amp);

        if (amp) {
            // -ve tick
            ytick(-1 * amp);
        }
    }
}

function render_sine_wave() {
    // sine wave
    window.sine_wave && window.sine_wave.remove();

    window.sine_wave = new Path({
    	strokeColor: 'black',
    	strokeWidth: 1,
    	strokeCap: 'round',
    });

    var number_of_waves = params.frequency / config.min_frequency;
    var length = config.width / number_of_waves;
    var step = length / 360;
    var phase_in_radians = params.phase * Math.PI / 180;
    var handles = {};
    var startx = config.startx;
    for (var count=0; count < number_of_waves; count++) {
    	for (var i=0, l=length+step; i < l; i += step) {
    		var x = startx + i;

    		var angle_in_degrees = 360 * i / length;
    		var angle = angle_in_degrees * Math.PI / 180;
    		var y = -1 * params.scaled_amplitude * Math.sin(angle + phase_in_radians);
    		var point = new Point(x, y + config.starty);
    		var segment = sine_wave.add(point);

    		if (count===0) {
    			if (y===-1 * params.scaled_amplitude) {
    				handles.amplitude = { x: x, y: y + config.starty };
    			} else if (y===0 || (y > -0.01 && y < 0.01)) {
    				handles.frequency = { x: x, y: y + config.starty };
    			} else if (y===params.scaled_amplitude) {
    				handles.phase = { x: x, y: y + config.starty };
    			}
    		}
    	}
    	startx += length;
    }

    // amplitude handle
    window.amplitude_handle && window.amplitude_handle.remove();
    window.amplitude_text && window.amplitude_text.remove();

    if (handles.amplitude) {
        var amplitude_center = new Point(handles.amplitude.x, handles.amplitude.y);
        window.amplitude_handle = new Path.Circle(amplitude_center, 7);
        amplitude_handle.strokeColor = 'red';
        amplitude_handle.fillColor = 'yellow';

        window.amplitude_text = new PointText(amplitude_center);
        amplitude_text.fillColor = 'black';
        amplitude_text.content = "a";
        amplitude_text.position.y += 3;
        amplitude_text.position.x -= 3.5;
    }

    // frequency handle
    window.frequency_handle && window.frequency_handle.remove();
    window.frequency_text && window.frequency_text.remove();

    if (handles.frequency) {
        var frequency_center = new Point(handles.frequency.x, handles.frequency.y);
        window.frequency_handle = new Path.Circle(frequency_center, 7);
        frequency_handle.strokeColor = 'red';
        frequency_handle.fillColor = 'yellow';

        window.frequency_text = new PointText(frequency_center);
        frequency_text.fillColor = 'black';
        frequency_text.content = "𝑓";
        frequency_text.position.y += 3.5;
        frequency_text.position.x -= 3.5;
    }

    // phase handle
    window.phase_handle && window.phase_handle.remove();
    window.phase_text && window.phase_text.remove();

    if (handles.phase) {
        var phase_center = new Point(handles.phase.x, handles.phase.y);
        window.phase_handle = new Path.Circle(phase_center, 7);
        phase_handle.strokeColor = 'red';
        phase_handle.fillColor = 'yellow';

        window.phase_text = new PointText(phase_center);
        phase_text.fillColor = 'black';
        phase_text.content = "ɸ";
        phase_text.position.y += 3.5;
        phase_text.position.x -= 4.2;
    }
};

function render_phase_circle() {
    window.phase_circle && window.phase_circle.remove();

    window.phase_circle_center = new Point(200, 200);
    window.phase_circle = new Path.Circle(phase_circle_center, params.scaled_amplitude);
    phase_circle.strokeColor = 'black';

    var phase_indicator_center = phase_circle_center.clone();
    phase_indicator_center.x += params.scaled_amplitude;
    phase_indicator_center = phase_indicator_center.rotate(-1 * params.phase, phase_circle_center.clone());

    window.phase_indicator && window.phase_indicator.remove();
    window.phase_indicator_text && window.phase_indicator_text.remove();

    window.phase_indicator = new Path.Circle(phase_indicator_center, 7);
    phase_indicator.strokeColor = 'red';
    phase_indicator.fillColor = 'yellow';

    window.phase_indicator_text = new PointText(phase_indicator_center);
    phase_indicator_text.fillColor = 'black';
    phase_indicator_text.content = "ɸ";
    phase_indicator_text.position.y += 3.5;
    phase_indicator_text.position.x -= 4.2;
};

function render_frequency_bar() {
    window.frequency_bar && window.frequency_bar.remove();
    var y = config.starty+120;

    window.frequency_bar = new Path.Line(
    	new Point(config.startx, y),
    	new Point(config.width + 3 * config.x_offset, y)
    );
    frequency_bar.strokeColor = 'black';

    var flength = config.width + 2 * config.x_offset;
    var fres = 50;
    var fstep = config.max_frequency / fres;
    var lstep = config.width / fstep;
    var max_count = fstep + 1;

    for (var count=0; count <= max_count; count++) {
    	var tick = new Path.Line({
    		from: [config.x_offset + count * lstep, y - 5],
    		to: [config.x_offset + count * lstep, y + 5],
    		strokeColor: 'black'
    	});

    	if (count > 0) {
    		var text = new PointText(tick.lastSegment.point);
    		text.fillColor = 'black';
    		text.content = count * fres;
            text.justification = 'center';
    		text.position.y += 15;
    	}
    }


};

function render_frequency_indicator() {
    window.frequency_indicator && window.frequency_indicator.remove();
    window.frequency_indicator_bar && window.frequency_indicator_bar.remove();
    window.frequency_indicator_text && window.frequency_indicator_text.remove();

    var y = config.starty+120;
    var indicator_height = y - params.scaled_amplitude;

    var x = (params.frequency / config.max_frequency) * config.width + config.x_offset;
    window.frequency_indicator_bar = new Path.Line({
        from: [x, indicator_height],
        to: [x, y],
        strokeColor: 'black'
    });

    var frequency_indicator_center = new Point(x, indicator_height);
    window.frequency_indicator = new Path.Circle(frequency_indicator_center, 7);
    frequency_indicator.strokeColor = 'red';
    frequency_indicator.fillColor = 'yellow';

    window.frequency_indicator_text = new PointText(frequency_indicator_center);
    frequency_indicator_text.fillColor = 'black';
    frequency_indicator_text.content = "𝑓";
    frequency_indicator_text.position.y += 3.5;
    frequency_indicator_text.position.x -= 4.2;
};

window.active_param = null;
window.active_handle = null;

function onMouseDown(event) {
    if (amplitude_handle.hitTest(event.point)) {
        active_param = "amplitude";
        document.body.style.cursor = "ns-resize";
    } else if (frequency_handle.hitTest(event.point)) {
        active_param = "frequency";
        active_handle = "frequency_handle";
        document.body.style.cursor = "ew-resize";
    } else if (frequency_indicator.hitTest(event.point)) {
        active_param = "frequency";
        active_handle = "frequency_indicator";
        document.body.style.cursor = "ew-resize";
    } else if (phase_handle.hitTest(event.point)) {
        active_param = "phase";
        active_handle = "phase_handle";
        document.body.style.cursor = "all-scroll";
    } else if (phase_indicator.hitTest(event.point)) {
        active_param = "phase";
        active_handle = "phase_indicator";
        document.body.style.cursor = "all-scroll";
    } else {
        document.body.style.cursor = "default";
    }
}

function onMouseDrag(event) {
    if (active_param==="amplitude") {
        var scaled_amplitude = params.scaled_amplitude - event.delta.y;
        var amplitude = scaled_amplitude / config.amplitude_scaling_factor;
        set_value("amplitude", amplitude);

    } else if (active_param==="frequency") {
        if (active_handle==="frequency_indicator") {
            var frequency = params.frequency + event.delta.x;
        } else {
            var frequency = params.frequency - 2 * event.delta.x;
        }
        set_value("frequency", frequency);

    } else if (active_param==="phase") {

        if (active_handle==="phase_indicator") {
            var phase = Math.round(180 - (phase_circle_center - event.point).angle);
        } else {
            // multiplying by a factor to change phase faster for higher frequencies
            var phase = params.phase - event.delta.x * ((params.frequency / config.min_frequency > 2) ? 3 : 1);
        }
        set_value("phase", phase);

    } else {
        return;
    }
}

function set_value(param, value) {
    if (param==="amplitude") {
        if (value > config.max_amplitude || value < config.min_amplitude) {
            return;
        }

        params.amplitude = value;
        params.scaled_amplitude = params.amplitude * config.amplitude_scaling_factor;

    } else if (param==="frequency") {
        if (value > config.max_frequency || value < config.min_frequency) {
            return;
        }

        params.frequency = value;

    } else if (param==="phase") {
        if (value > config.max_phase || value < config.min_phase) {
            return;
        }

        params.phase = value;

    } else {
        return;
    }

    render_sine_wave();
    render_phase_circle();
    render_frequency_indicator();
}

function onMouseUp(event) {
    active_param = null;
    active_handle = null;
    document.body.style.cursor = "default";
}