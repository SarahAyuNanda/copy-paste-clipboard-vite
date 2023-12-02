import { Button, Input } from 'antd'
import AppController from './app.controller'

export function App() {
  const controller = AppController()

  return (
    <main className={'container min-h-screen mx-auto flex items-center justify-center flex-col gap-8'}>
      {controller.contextHolder}

      <div className={'flex items-center justify-center gap-4 px-8 py-4 rounded-md bg-zinc-700'}>
        <span ref={controller.textRef} className={'select-none'}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </span>
        <Button className='bg-zinc-800' type='primary' onClick={controller.onCopy}>
          Copy
        </Button>
      </div>

      <div className={'w-1/4'}>
        <Input allowClear size='large' />
      </div>
    </main>
  )
}
