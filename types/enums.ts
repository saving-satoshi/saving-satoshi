export enum LessonDirection {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export enum LessonView {
  Info = 'info',
  Code = 'code',
  Execute = 'execute',
}

export enum InjectableComponentType {
  A,
  Link,
  Tooltip,
  LineBreak,
  Span,
}

export enum LoadingState {
  Idle = 0,
  Failed = 1,
  Success = 2,
}

export enum Difficulty {
  NORMAL = 'normal',
  HARD = 'hard',
  NOT_SELECTED = 'not_selected',
}
