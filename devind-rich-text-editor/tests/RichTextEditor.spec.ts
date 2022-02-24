import { screen, render } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { install } from './plugins'
import RichTextEditor from '../src/components/RichTextEditor.vue'

beforeAll(install)

test('example test', async () => {
  render(RichTextEditor)
  screen.getByText('Value: 0')
  userEvent.click(screen.getByText('Inc'))
  await screen.findByText('Value: 1')
})
