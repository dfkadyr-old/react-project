import { memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/class-names'
import { Button, ButtonTheme, ButtonSize } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { Drawer } from '@/shared/ui/drawer'
import { Input } from '@/shared/ui/input'
import { Modal } from '@/shared/ui/modal'
import { HStack, VStack } from '@/shared/ui/stack'
import { StarRating } from '@/shared/ui/star-rating'
import { Text } from '@/shared/ui/text'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  rate?: number
  onCancel: (starsCount: number) => void
  onAccept: (starsCount: number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    onAccept,
    feedbackTitle,
    hasFeedback = false,
    onCancel,
    title,
    rate = 0
  } = props
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(rate)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount)
    if (hasFeedback) {
      setIsModalOpen(true)
    } else {
      onAccept?.(selectedStarsCount)
    }
  }, [hasFeedback, onAccept])

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false)
    onAccept?.(starsCount, feedback)
  }, [feedback, onAccept, starsCount])

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false)
    onCancel?.(starsCount)
  }, [onCancel, starsCount])

  const modalContent = (
    <>
      {feedbackTitle && <Text
        title={feedbackTitle}
      />}
      <Input
        data-testid="RatingCard.Input"
        value={feedback}
        onChange={setFeedback}
        placeholder={t('Your feedback')}
      />
    </>
  )

  return (
    <Card data-testid="RatingCard" className={classNames('', {}, [className])}>
      <VStack align="center" gap="8">
        {title && <Text title={starsCount ? t('Thank you for rating!') : title} /> }
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button data-testid="RatingCard.Close" onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                {t('Close')}
              </Button>
              <Button data-testid="RatingCard.Send" onClick={acceptHandle}>
                {t('Send')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <VStack gap="32">
            {modalContent}
            <Button onClick={acceptHandle} size={ButtonSize.L}>
              {t('Send')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  )
})
