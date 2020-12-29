input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 100)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 100)
    basic.pause(1000)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 100)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 100)
    basic.pause(200)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 100)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 100)
    basic.pause(1000)
    motobit.enable(MotorPower.Off)
    basic.showIcon(IconNames.SmallSquare)
})
basic.showIcon(IconNames.Yes)
motobit.invert(Motor.Left, false)
motobit.invert(Motor.Right, false)
basic.forever(function () {
	
})
