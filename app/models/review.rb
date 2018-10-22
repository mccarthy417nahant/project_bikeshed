class Review < ApplicationRecord
  belongs_to :user
  belongs_to :bike

  validates :user_id, presence: true
  validates :bike_id, presence: true
  validates :email, presence: true
  validates :rating, presence: true
end
