export enum MeasurmentType {
  NumericHabit = "NumericHabit",
  BooleanHabit = "BooleanHabit"
}

type WeekDays =  "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

export interface Habit {
  unit: string,
  goal: string,
  title: string,
  measurmentType: MeasurmentType,
  days: {[key in WeekDays]: boolean},
  operation: string,
  value: string
}

export interface HabitWithId extends Habit{
  id: number
}