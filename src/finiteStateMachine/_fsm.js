
stateMachine = {
  'IMAGE': {'click': 'FROMIMAGE'},
  'OVERLAY': {'click': 'FROMOVERLAY'},
  'FROMOVERLAY': {'stopProgress': 'IMAGE' },
  'FROMIMAGE': {'stopProgress': 'OVERLAY'},
}
