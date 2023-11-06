package stack

type Stack []string

func (stack *Stack) Push(s string) {
	return append(*stack, s)
}

func (stack *Stack) Pop() {
	n := len(*stack)
	return *stack[:n] // Pop
}
