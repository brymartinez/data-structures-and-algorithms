package stack

type Stack []string

func (stack *Stack) Push(s string) {
	*stack = append(*stack, s)
}

func (stack *Stack) Pop() (string, bool) {

	lastElement := len(*stack) - 1

	if lastElement == -1 {
		return "", false
	}

	last := (*stack)[lastElement]
	val := (*stack)[:lastElement]
	*stack = val
	return last, true
}
