import { message } from 'antd'
import { useRef } from 'preact/hooks';

const AppController = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const textRef = useRef<HTMLSpanElement>(null)

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Text Copied',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Copy Failed',
    });
  };

  const onCopy = async () => {
    const text = textRef.current?.innerText ?? 'Something went wrong'

    try {
      await navigator.clipboard.writeText(text)
      success()
    } catch (_) {
      error()
    }
  }

  return {
    contextHolder,
    textRef,
    onCopy,
  }
}

export default AppController