export const POWER_LIFTING = {
    BENCH_PRESS: 'benchPress',
    DEADLIFT: 'deadlift',
    SQUAT: 'squat'
}

export const LEG_DAY = {
    LEG_PRESS: 'legPress',
    LEG_EXTENSION: 'legExtension',
    LEG_CURL: 'legCurl',
    LEG_RAISE: 'legRaise'
}

export const WEIGHT_TRAININGS = {
    ...POWER_LIFTING,
    ...LEG_DAY,
    BICEPS_CURL: 'bicepsCurl',
    CALF_RAISES: 'calfRaises',
    CRUNCH: 'crunch',
    HIP_ADDUCTOR: 'hipAdductor',
    LATERAL_RAISE: 'lateralRaise',
    LUNGE: 'lunge',
    PULL_DOWN: 'pullDown',
    PULL_UP: 'pullUp',
    PUSH_UP: 'pushUp',
    SHOULDER_PRESS: 'shoulderPress',
    TRICEPS_EXTENSION: 'tricepsExtension',
}