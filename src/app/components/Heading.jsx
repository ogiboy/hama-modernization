function Heading({ as = 'h2', className, children }) {
  const Tag = as

  return <Tag className={className}>{children}</Tag>
}

export default Heading
