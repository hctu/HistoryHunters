type CollectionMarkProps = {
  compact?: boolean
}

export function CollectionMark({ compact = false }: CollectionMarkProps) {
  return (
    <span className={`collection-mark${compact ? ' collection-mark--compact' : ''}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  )
}
