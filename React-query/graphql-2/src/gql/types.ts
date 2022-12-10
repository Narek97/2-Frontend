export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Ad = {
  __typename?: 'Ad';
  createdAt: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  feed: Feed;
  feedId: Scalars['Int'];
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  todayViewCount: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  venue?: Maybe<Venue>;
  venueId?: Maybe<Scalars['Int']>;
};

export type AddFeedLike = {
  feedId: Scalars['Int'];
};

export type BlockUserInput = {
  userId: Scalars['Int'];
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Chat = {
  __typename?: 'Chat';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  isGroup: Scalars['Boolean'];
  latestMessage: Scalars['Int'];
  message?: Maybe<Message>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users: Array<Scalars['Int']>;
};

export type ChatMessageModel = {
  __typename?: 'ChatMessageModel';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  isEdited: Scalars['Boolean'];
  message: Scalars['String'];
  sender?: Maybe<User>;
  status?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type CheckIsUserBlockedWithChatIdModel = {
  __typename?: 'CheckIsUserBlockedWithChatIdModel';
  isBlocked?: Maybe<Scalars['Boolean']>;
};

export type CheckOtpInput = {
  otp: Scalars['String'];
  password: Scalars['String'];
  passwordConfirm: Scalars['String'];
  sessionToken: Scalars['String'];
};

export type CheckOtpModel = {
  __typename?: 'CheckOtpModel';
  token: Scalars['String'];
  user: User;
};

export type CheckinInput = {
  description?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  media?: InputMaybe<Array<MediaInput>>;
  venueId: Scalars['Int'];
};

export type CountFollowRequests = {
  __typename?: 'CountFollowRequests';
  count: Scalars['Int'];
};

export type CountNotSeenNotificationsModel = {
  __typename?: 'CountNotSeenNotificationsModel';
  count: Scalars['Int'];
};

export type CreateAdInput = {
  description?: InputMaybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  hashtagIds?: InputMaybe<Array<Scalars['Int']>>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  media?: InputMaybe<Array<MediaInput>>;
  parentId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<FeedType>;
  venueId?: InputMaybe<Scalars['Int']>;
};

export type CreateAdminInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  permissions: Array<Scalars['Int']>;
};

export type CreateEventInput = {
  address?: InputMaybe<Scalars['String']>;
  bandName?: InputMaybe<Scalars['String']>;
  cover?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endTime: Scalars['String'];
  hashtagIds?: InputMaybe<Array<Scalars['Int']>>;
  media?: InputMaybe<MediaInput>;
  name: Scalars['String'];
  price?: InputMaybe<Scalars['Int']>;
  startDate: Scalars['String'];
  startTime: Scalars['String'];
  venueId?: InputMaybe<Scalars['Int']>;
};

export type CreateFeedComment = {
  comment: Scalars['String'];
  feedId: Scalars['Int'];
  parentId?: InputMaybe<Scalars['Int']>;
};

export type CreateHashtagInput = {
  name: Scalars['String'];
};

export type CreatePostInput = {
  description?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  media?: InputMaybe<Array<MediaInput>>;
  parentId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<FeedType>;
  venueId?: InputMaybe<Scalars['Int']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type CreateVenueComment = {
  comment: Scalars['String'];
  parentId?: InputMaybe<Scalars['Int']>;
  venueId: Scalars['Int'];
};

export type CreateVenueInput = {
  address: Scalars['String'];
  capacity?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  googlePlaceId?: InputMaybe<Scalars['String']>;
  internationalPhoneNumber?: InputMaybe<Scalars['String']>;
  linkToWebsite?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<VenueLocationInput>;
  logo?: InputMaybe<Scalars['String']>;
  managers?: InputMaybe<Array<VenueManagerInput>>;
  media?: InputMaybe<Array<MediaInput>>;
  name: Scalars['String'];
  workingHours: Array<WorkingHoursInput>;
};

export type CreateVenueManagerInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  venueId: Scalars['Int'];
};

export type CreateVenueRate = {
  rate: Scalars['Int'];
  venueId: Scalars['Int'];
};

export type CreateVenueStaffInput = {
  email?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  venueId: Scalars['Int'];
};

export type Deleted = {
  __typename?: 'Deleted';
  id: Scalars['Int'];
  message: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  address?: Maybe<Scalars['String']>;
  adminUserId?: Maybe<Scalars['Int']>;
  bandName?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  endTime: Scalars['String'];
  id: Scalars['Int'];
  media?: Maybe<Array<MediaObject>>;
  name: Scalars['String'];
  price?: Maybe<Scalars['Int']>;
  startDate: Scalars['String'];
  startTime: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  venueId?: Maybe<Scalars['Int']>;
};

export type EventObject = {
  __typename?: 'EventObject';
  event: Event;
  feed: Feed;
  hashtagIds: Array<Scalars['Int']>;
};

export type Feed = {
  __typename?: 'Feed';
  ad?: Maybe<Ad>;
  cover?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  event?: Maybe<Event>;
  eventId?: Maybe<Scalars['Int']>;
  hashtags?: Maybe<Array<HashtagFeed>>;
  id: Scalars['Int'];
  isPublished: Scalars['Boolean'];
  isShared: Scalars['Boolean'];
  likedByMe: Scalars['Boolean'];
  media?: Maybe<Array<MediaObject>>;
  parent?: Maybe<Feed>;
  parentId?: Maybe<Scalars['Int']>;
  privacy: Scalars['String'];
  totalComments: Scalars['Int'];
  totalLikes: Scalars['Int'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  venue?: Maybe<Venue>;
  venueId?: Maybe<Scalars['Int']>;
};

export type FeedComment = {
  __typename?: 'FeedComment';
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  feed: Feed;
  id: Scalars['Int'];
  likeCount: Scalars['Int'];
  parent?: Maybe<FeedComment>;
  replyCount: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type FeedLike = {
  __typename?: 'FeedLike';
  createdAt: Scalars['DateTime'];
  feed: Feed;
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export enum FeedType {
  Ad = 'AD',
  Checkin = 'CHECKIN',
  Event = 'EVENT',
  Post = 'POST'
}

export type ForgotPasswordInput = {
  email: Scalars['String'];
};

export type ForgotPasswordModel = {
  __typename?: 'ForgotPasswordModel';
  message: Scalars['String'];
  sessionToken: Scalars['String'];
};

export type GetAdsInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type GetAdsObject = {
  __typename?: 'GetAdsObject';
  ads: Array<Feed>;
  count: Scalars['Int'];
};

export type GetAlertsObject = {
  __typename?: 'GetAlertsObject';
  alerts: Array<Feed>;
};

export type GetAppUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type GetAppUsersModel = {
  __typename?: 'GetAppUsersModel';
  count: Scalars['Int'];
  users: Array<User>;
};

export type GetChatIdModel = {
  __typename?: 'GetChatIdModel';
  id: Scalars['Int'];
};

export type GetFcmTokensModel = {
  __typename?: 'GetFcmTokensModel';
  tokens: Array<Scalars['String']>;
};

export type GetFeedCommentInput = {
  feedId: Scalars['Int'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type GetFeedCommentReplyInput = {
  commentId: Scalars['Int'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type GetFeedLikesCountInput = {
  feedId: Scalars['Int'];
};

export type GetFeedLikesCountModel = {
  __typename?: 'GetFeedLikesCountModel';
  count: Scalars['Int'];
  lastLikedUser: Scalars['String'];
  likedByMe: Scalars['Boolean'];
};

export type GetFeedsArgs = {
  adsCount: Scalars['Int'];
  extraFeeds: Scalars['Boolean'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type GetFeedsByUserIdInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type GetFeedsObject = {
  __typename?: 'GetFeedsObject';
  adsCount: Scalars['Int'];
  extraFeeds: Scalars['Boolean'];
  feeds: Array<Feed>;
};

export type GetFollowersByUserIdInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type GetFollowingsByUserIdInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type GetHashtags = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type GetMessagePresignedUrlInput = {
  chatId: Scalars['Int'];
  duration?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  repliedTo?: InputMaybe<Scalars['Int']>;
  type: Scalars['String'];
};

export type GetMessagesInput = {
  chatId: Scalars['Int'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type GetPreSignedUrlInput = {
  key: Scalars['String'];
};

export type GetPresignedUrlModel = {
  __typename?: 'GetPresignedUrlModel';
  message: Message;
  url: Scalars['String'];
};

export type GetReportedFeedsModel = {
  __typename?: 'GetReportedFeedsModel';
  count: Scalars['Int'];
  reports: Array<ReportedFeed>;
};

export type GetUserModel = {
  __typename?: 'GetUserModel';
  isBlocked?: Maybe<Scalars['Boolean']>;
  isFollow: Scalars['Boolean'];
  isRequestedFollow: Scalars['Boolean'];
  user: User;
};

export type GetVenueComments = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  venueId: Scalars['Int'];
};

export type GetVisitedPlacesInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type Global = {
  __typename?: 'Global';
  message: Scalars['String'];
  status: Scalars['Int'];
};

export type Hashtag = {
  __typename?: 'Hashtag';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type HashtagFeed = {
  __typename?: 'HashtagFeed';
  createdAt: Scalars['DateTime'];
  feed: Feed;
  feedId: Scalars['Int'];
  hashtag: Hashtag;
  hashtagId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type HashtagUser = {
  __typename?: 'HashtagUser';
  createdAt: Scalars['DateTime'];
  hashtag: Hashtag;
  hashtagId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type LikeFeed = {
  __typename?: 'LikeFeed';
  liked: Scalars['Boolean'];
};

export type LinkHashtagsToFeedInput = {
  feedId: Scalars['Int'];
  hashtagIds: Array<Scalars['Int']>;
};

export type ListAdminObject = {
  __typename?: 'ListAdminObject';
  admins: Array<User>;
  count: Scalars['Int'];
};

export type ListAdminsInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type ListChatsInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ListChatsModel = {
  __typename?: 'ListChatsModel';
  chat_image?: Maybe<MediaObject>;
  hasUnreadMessage: Scalars['Boolean'];
  id: Scalars['Int'];
  isMuted: Scalars['Boolean'];
  message: ChatMessageModel;
  name?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type ListEventsInput = {
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ListEventsObject = {
  __typename?: 'ListEventsObject';
  count: Scalars['Int'];
  events: Array<Event>;
};

export type ListFeedLikers = {
  __typename?: 'ListFeedLikers';
  background_image?: Maybe<MediaObject>;
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  followers: Scalars['Int'];
  followings: Scalars['Int'];
  hashtags: Array<HashtagUser>;
  id: Scalars['Int'];
  isFollow: Scalars['Boolean'];
  isRequestedFollow: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  online: Scalars['Boolean'];
  password: Scalars['String'];
  permissions?: Maybe<Array<Scalars['Int']>>;
  profile_image?: Maybe<MediaObject>;
  role: Scalars['String'];
  salt: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ListFeedLikersInput = {
  feedId: Scalars['Int'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ListHashtagsModel = {
  __typename?: 'ListHashtagsModel';
  count: Scalars['Int'];
  hashtags?: Maybe<Array<Hashtag>>;
};

export type ListVenueArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ListVenueManagersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  venueId?: InputMaybe<Scalars['Int']>;
};

export type ListVenueManagersObject = {
  __typename?: 'ListVenueManagersObject';
  count: Scalars['Int'];
  venueManagers?: Maybe<Array<VenueManager>>;
};

export type ListVenueStaffArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ListVenueStaffObject = {
  __typename?: 'ListVenueStaffObject';
  count: Scalars['Int'];
  venueStaffs: Array<VenueStaff>;
};

export type ListVenuesObject = {
  __typename?: 'ListVenuesObject';
  count: Scalars['Int'];
  venues: Array<Venue>;
};

export type Location = {
  __typename?: 'Location';
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type MediaInput = {
  contentLength?: InputMaybe<Scalars['Int']>;
  contentType?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isCover?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
  sizes?: InputMaybe<Array<Scalars['String']>>;
  type: Scalars['String'];
};

export type MediaObject = {
  __typename?: 'MediaObject';
  contentLength: Scalars['Int'];
  contentType: Scalars['String'];
  fileName: Scalars['String'];
  id: Scalars['String'];
  isCover?: Maybe<Scalars['Boolean']>;
  key: Scalars['String'];
  sizes?: Maybe<Array<Scalars['String']>>;
  type: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  chatId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  duration: Scalars['String'];
  id: Scalars['Int'];
  isEdited: Scalars['Boolean'];
  message: Scalars['String'];
  readBy: Array<Scalars['Int']>;
  sender: User;
  senderId: Scalars['Int'];
  status: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptFollowRequest: Success;
  addFcmToken: Success;
  blockUser: UserBlocked;
  changeMedia: Success;
  checkOtp: CheckOtpModel;
  checkin: Feed;
  createAd: Feed;
  createAdmin: User;
  createEvent: Event;
  createFeedComment: FeedComment;
  createHashtag: Hashtag;
  createPost: Feed;
  createUser: UserLogin;
  createVenue: Venue;
  createVenueComment: VenueComment;
  createVenueManager: User;
  createVenueRate: VenueRate;
  createVenueStaff: VenueStaff;
  deleteChat: Deleted;
  deleteFcmToken: Success;
  deleteReportedFeed: Success;
  deleteUser: Success;
  deleteVenueStaff: Deleted;
  forgotPassword: ForgotPasswordModel;
  getChatId: GetChatIdModel;
  getMessagePreSignedUrl: GetPresignedUrlModel;
  getPresignedUrl: PreSignedUrlModel;
  ignoreReportedFeed: Success;
  likeFeed: LikeFeed;
  linkHashtagsToFeed: Array<Hashtag>;
  linkHashtagsToUser: Array<Hashtag>;
  login: UserLogin;
  markAsUnread: Global;
  muteChat: Global;
  rejectFollowRequest: Success;
  removeAd: Deleted;
  removeAdmin: Deleted;
  removeEvent: Deleted;
  removeFeed: Deleted;
  removeFollower: Success;
  removeHashtag: Deleted;
  removeHashtagFromFeed: Deleted;
  removeHashtagFromUser: Deleted;
  removeNotification: Success;
  removeVenue: Deleted;
  removeVenueManager: Array<Deleted>;
  replaceFcmToken: Success;
  reportFeed: Success;
  sendFeedback: Success;
  sendFollowRequest: Success;
  sendMessageToVenueStaff: Success;
  setSeenNotifications: Success;
  sharePost: Feed;
  unblockUser: Success;
  unfollowUser: Success;
  updateAd: Feed;
  updateAdmin: User;
  updateEvent: Event;
  updateFeed: Feed;
  updatePassword: UserLogin;
  updateUser: User;
  updateVenue: Venue;
  updateVenueStaff: VenueStaff;
  uploadMediaFromAdmin: Success;
};


export type MutationAcceptFollowRequestArgs = {
  fromUserId: Scalars['Int'];
};


export type MutationAddFcmTokenArgs = {
  token: Scalars['String'];
};


export type MutationBlockUserArgs = {
  blockUserArgs: BlockUserInput;
};


export type MutationCheckOtpArgs = {
  checkOtpData: CheckOtpInput;
};


export type MutationCheckinArgs = {
  checkinInput: CheckinInput;
};


export type MutationCreateAdArgs = {
  createAdInput: CreateAdInput;
};


export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput;
};


export type MutationCreateEventArgs = {
  createEventInput: CreateEventInput;
};


export type MutationCreateFeedCommentArgs = {
  createFeedCommentInput: CreateFeedComment;
};


export type MutationCreateHashtagArgs = {
  createHashtagInput: CreateHashtagInput;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreateUserArgs = {
  createUserData: CreateUserInput;
};


export type MutationCreateVenueArgs = {
  createVenueInput: CreateVenueInput;
};


export type MutationCreateVenueCommentArgs = {
  createVenueCommentInput: CreateVenueComment;
};


export type MutationCreateVenueManagerArgs = {
  createVenueManagerInput: CreateVenueManagerInput;
};


export type MutationCreateVenueRateArgs = {
  createVenueRateInput: CreateVenueRate;
};


export type MutationCreateVenueStaffArgs = {
  createVenueStaffInput: CreateVenueStaffInput;
};


export type MutationDeleteChatArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteFcmTokenArgs = {
  token: Scalars['String'];
};


export type MutationDeleteReportedFeedArgs = {
  feedId: Scalars['Int'];
};


export type MutationDeleteVenueStaffArgs = {
  venueStaffId: Scalars['Int'];
};


export type MutationForgotPasswordArgs = {
  forgotPasswordData: ForgotPasswordInput;
};


export type MutationGetChatIdArgs = {
  userId: Scalars['Float'];
};


export type MutationGetMessagePreSignedUrlArgs = {
  getMessagePreSignedUrlArgs: GetMessagePresignedUrlInput;
};


export type MutationGetPresignedUrlArgs = {
  getPreSignedUrlInput: GetPreSignedUrlInput;
};


export type MutationIgnoreReportedFeedArgs = {
  id: Scalars['Int'];
};


export type MutationLikeFeedArgs = {
  createFeedLikeInput: AddFeedLike;
};


export type MutationLinkHashtagsToFeedArgs = {
  linkHashtagsToFeedInput: LinkHashtagsToFeedInput;
};


export type MutationLinkHashtagsToUserArgs = {
  ids: Array<Scalars['Int']>;
};


export type MutationLoginArgs = {
  userCredentials: UserLoginDto;
};


export type MutationMarkAsUnreadArgs = {
  chatId: Scalars['Float'];
};


export type MutationMuteChatArgs = {
  chatId: Scalars['Float'];
};


export type MutationRejectFollowRequestArgs = {
  fromUserId: Scalars['Int'];
};


export type MutationRemoveAdArgs = {
  adId: Scalars['Int'];
};


export type MutationRemoveAdminArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveEventArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveFeedArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveFollowerArgs = {
  userId: Scalars['Int'];
};


export type MutationRemoveHashtagArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveHashtagFromFeedArgs = {
  removeHashtagFromFeedInput: RemoveHashtagFromFeedInput;
};


export type MutationRemoveHashtagFromUserArgs = {
  hashtagId: Scalars['Int'];
};


export type MutationRemoveNotificationArgs = {
  notificationId: Scalars['Int'];
};


export type MutationRemoveVenueArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveVenueManagerArgs = {
  venueManagerUserId: Scalars['Int'];
};


export type MutationReplaceFcmTokenArgs = {
  replaceFcmTokenInput: ReplaceFcmTokenInput;
};


export type MutationReportFeedArgs = {
  reportFeedInput: ReportFeedInput;
};


export type MutationSendFeedbackArgs = {
  sendFeedbackArgs: SendFeedbackInput;
};


export type MutationSendFollowRequestArgs = {
  userId: Scalars['Int'];
};


export type MutationSendMessageToVenueStaffArgs = {
  sendMessageToVenueStaffInput: SendMessageToVenueStaffInput;
};


export type MutationSetSeenNotificationsArgs = {
  notificationsIds: Array<Scalars['Int']>;
};


export type MutationSharePostArgs = {
  shareFeedInput: ShareFeedInput;
};


export type MutationUnblockUserArgs = {
  userId: Scalars['Int'];
};


export type MutationUnfollowUserArgs = {
  userId: Scalars['Int'];
};


export type MutationUpdateAdArgs = {
  updateAdInput: UpdateAdInput;
};


export type MutationUpdateAdminArgs = {
  updateAdminInput: UpdateAdminInput;
};


export type MutationUpdateEventArgs = {
  updateEventInput: UpdateEventInput;
};


export type MutationUpdateFeedArgs = {
  updateFeedInput: UpdateFeedInput;
};


export type MutationUpdatePasswordArgs = {
  updatePasswordInput: UpdatePasswordInput;
};


export type MutationUpdateUserArgs = {
  updateUser: UpdateUserInput;
};


export type MutationUpdateVenueArgs = {
  updateVenueInput: UpdateVenueInput;
};


export type MutationUpdateVenueStaffArgs = {
  updateVenueStaffInput: UpdateVenueStaffInput;
};


export type MutationUploadMediaFromAdminArgs = {
  uploadMediaFromAdminInput: UploadMediaFromAdminInput;
};

export type Notification = {
  __typename?: 'Notification';
  action: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  event?: Maybe<Event>;
  feedComment?: Maybe<FeedComment>;
  feedLike?: Maybe<FeedLike>;
  id: Scalars['Int'];
  isSeen?: Maybe<Scalars['Boolean']>;
  notificationableId: Scalars['Int'];
  notificationableType: Scalars['String'];
  senderUser?: Maybe<User>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userFollower?: Maybe<UserFollower>;
  userId: Scalars['Int'];
};

export type OtherReasonsObject = {
  __typename?: 'OtherReasonsObject';
  createdAt: Scalars['String'];
  reason: Scalars['String'];
  user: ReasonUserObject;
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Photo = {
  __typename?: 'Photo';
  height: Scalars['Float'];
  imageLink: Scalars['String'];
  photo_reference: Scalars['String'];
  width: Scalars['Float'];
};

export type Place = {
  __typename?: 'Place';
  icon: Scalars['String'];
  location: Location;
  name: Scalars['String'];
  photos: Array<Photo>;
  placeID: Scalars['String'];
};

export type PreSignedUrlModel = {
  __typename?: 'PreSignedUrlModel';
  key: Scalars['String'];
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  checkIsUserBlockedWithChatId: CheckIsUserBlockedWithChatIdModel;
  countFollowRequests: CountFollowRequests;
  countNotSeenNotifications: CountNotSeenNotificationsModel;
  feed: Feed;
  findEvent: EventObject;
  getAdmins: ListAdminObject;
  getAds: GetAdsObject;
  getAlerts: GetAlertsObject;
  getAllCategories: Array<Category>;
  getAppUsers?: Maybe<GetAppUsersModel>;
  getBlockedUsers: Array<User>;
  getFcmTokens: GetFcmTokensModel;
  getFeedHashtags: Array<HashtagFeed>;
  getFeedLikesCount: GetFeedLikesCountModel;
  getFeeds: GetFeedsObject;
  getFeedsByUserId: Array<Feed>;
  getFollowersByUserId: Array<User>;
  getFollowingsByUserId: Array<User>;
  getMe: User;
  getMessages: Array<Message>;
  getMyFollowers: Array<User>;
  getMyFollowings: Array<User>;
  getMySharedFeeds: Array<Feed>;
  getPlaces: Array<Place>;
  getReportedFeed: ReportedFeed;
  getReportedFeeds: GetReportedFeedsModel;
  getUser?: Maybe<GetUserModel>;
  getUserFeed: Array<Feed>;
  getUserHashtags: Array<HashtagUser>;
  getVenue: Venue;
  getVenueComments: Array<VenueComment>;
  getVenuePreview: Venue;
  getVisitedPlaces: Array<Venue>;
  listChats: Array<ListChatsModel>;
  listEvents: ListEventsObject;
  listFeedComments: Array<FeedComment>;
  listFeedCommentsReply: Array<FeedComment>;
  listFeedLikers: Array<ListFeedLikers>;
  listFollowRequests: Array<UserFollower>;
  listHashtags: ListHashtagsModel;
  listNotifications: Array<Notification>;
  listVenueStaff: ListVenueStaffObject;
  listVenues: ListVenuesObject;
  searchUser: Array<GetUserModel>;
  venueManagersList: ListVenueManagersObject;
};


export type QueryCheckIsUserBlockedWithChatIdArgs = {
  id: Scalars['Float'];
};


export type QueryFeedArgs = {
  id: Scalars['Int'];
};


export type QueryFindEventArgs = {
  id: Scalars['Int'];
};


export type QueryGetAdminsArgs = {
  getAdminsArgs: ListAdminsInput;
};


export type QueryGetAdsArgs = {
  getAdsArgs: GetAdsInput;
};


export type QueryGetAlertsArgs = {
  getAlertsInput: PaginationInput;
};


export type QueryGetAppUsersArgs = {
  getAppUsersArgs: GetAppUsersArgs;
};


export type QueryGetBlockedUsersArgs = {
  getBlockedUsersArgs: PaginationInput;
};


export type QueryGetFeedHashtagsArgs = {
  feedId: Scalars['Int'];
};


export type QueryGetFeedLikesCountArgs = {
  getFeedLikesCountArgs: GetFeedLikesCountInput;
};


export type QueryGetFeedsArgs = {
  getFeedsArgs: GetFeedsArgs;
};


export type QueryGetFeedsByUserIdArgs = {
  getFeedsByUserIdArgs: GetFeedsByUserIdInput;
};


export type QueryGetFollowersByUserIdArgs = {
  getFollowersByUserIdArgs: GetFollowersByUserIdInput;
};


export type QueryGetFollowingsByUserIdArgs = {
  getFollowingsByUserIdArgs: GetFollowingsByUserIdInput;
};


export type QueryGetMessagesArgs = {
  getMessagesArgs: GetMessagesInput;
};


export type QueryGetMyFollowersArgs = {
  getMyFollowersArgs: PaginationInput;
};


export type QueryGetMyFollowingsArgs = {
  getMyFollowingsArgs: PaginationInput;
};


export type QueryGetMySharedFeedsArgs = {
  getMySharedFeedsArgs: PaginationInput;
};


export type QueryGetPlacesArgs = {
  categories?: InputMaybe<Array<Scalars['String']>>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  openNow?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetReportedFeedArgs = {
  id: Scalars['Int'];
};


export type QueryGetReportedFeedsArgs = {
  getReportedFeedsArgs: PaginationInput;
};


export type QueryGetUserArgs = {
  id: Scalars['Float'];
};


export type QueryGetUserFeedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryGetVenueArgs = {
  id: Scalars['Int'];
};


export type QueryGetVenueCommentsArgs = {
  getVenueCommentsArgs: GetVenueComments;
};


export type QueryGetVenuePreviewArgs = {
  googlePlaceId: Scalars['String'];
};


export type QueryGetVisitedPlacesArgs = {
  getVisitedPlacesInput: GetVisitedPlacesInput;
};


export type QueryListChatsArgs = {
  listChatArgs: ListChatsInput;
};


export type QueryListEventsArgs = {
  listEventsArgs: ListEventsInput;
};


export type QueryListFeedCommentsArgs = {
  getFeedCommentArgs: GetFeedCommentInput;
};


export type QueryListFeedCommentsReplyArgs = {
  getFeedCommentReplyArgs: GetFeedCommentReplyInput;
};


export type QueryListFeedLikersArgs = {
  listFeedLikersArgs: ListFeedLikersInput;
};


export type QueryListFollowRequestsArgs = {
  PaginationInput: PaginationInput;
};


export type QueryListHashtagsArgs = {
  getHashtagsArgs: GetHashtags;
};


export type QueryListNotificationsArgs = {
  paginationInput: PaginationInput;
};


export type QueryListVenueStaffArgs = {
  listVenueStaffArgs: ListVenueStaffArgs;
};


export type QueryListVenuesArgs = {
  listVenuesArgs: ListVenueArgs;
};


export type QuerySearchUserArgs = {
  searchUserArgs: SearchUserInput;
};


export type QueryVenueManagersListArgs = {
  venueManagersListArgs: ListVenueManagersArgs;
};

export type ReasonUserObject = {
  __typename?: 'ReasonUserObject';
  name: Scalars['String'];
};

export type RemoveHashtagFromFeedInput = {
  feedId: Scalars['Int'];
  hashtagId: Scalars['Int'];
};

export type ReplaceFcmTokenInput = {
  newToken: Scalars['String'];
  oldToken: Scalars['String'];
};

export type ReportFeedInput = {
  feedId: Scalars['Int'];
  reason?: InputMaybe<Scalars['String']>;
  type: ReportedFeedType;
};

export type ReportedFeed = {
  __typename?: 'ReportedFeed';
  createdAt: Scalars['DateTime'];
  feed: Feed;
  feedId: Scalars['Int'];
  id: Scalars['Int'];
  reportCount: Scalars['Int'];
  reports: Array<ReportedFeedObject>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type ReportedFeedObject = {
  __typename?: 'ReportedFeedObject';
  count: Scalars['Int'];
  otherReasonMessages?: Maybe<Array<OtherReasonsObject>>;
  reason: Scalars['String'];
  type: ReportedFeedType;
};

export enum ReportedFeedType {
  Abuse = 'ABUSE',
  HateSpeech = 'HATE_SPEECH',
  Nudity = 'NUDITY',
  Other = 'OTHER',
  Spam = 'SPAM',
  Violence = 'VIOLENCE'
}

export type SearchUserInput = {
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type SendFeedbackInput = {
  feedback: Scalars['String'];
};

export type SendMessageToVenueStaffInput = {
  body: Scalars['String'];
  subject: Scalars['String'];
  venueStaffIds: Array<Scalars['Int']>;
};

export type ShareFeedInput = {
  description?: InputMaybe<Scalars['String']>;
  feedId: Scalars['Int'];
};

export type Success = {
  __typename?: 'Success';
  message: Scalars['String'];
  status: Scalars['Int'];
};

export type UpdateAdInput = {
  adId: Scalars['Int'];
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  hashtagIds?: InputMaybe<Array<Scalars['Int']>>;
  title?: InputMaybe<Scalars['String']>;
  venueId?: InputMaybe<Scalars['Int']>;
};

export type UpdateAdminInput = {
  adminUserId: Scalars['Int'];
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<Scalars['Int']>>;
};

export type UpdateEventInput = {
  address?: InputMaybe<Scalars['String']>;
  bandName?: InputMaybe<Scalars['String']>;
  cover?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  media?: InputMaybe<Array<MediaInput>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['String']>;
  venueId?: InputMaybe<Scalars['Int']>;
};

export type UpdateFeedInput = {
  address?: InputMaybe<Scalars['String']>;
  bandName?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['String']>;
  featuredImageUrl?: InputMaybe<MediaInput>;
  files?: InputMaybe<Array<MediaInput>>;
  formattedAddress?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  images?: InputMaybe<Array<MediaInput>>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<VenueLocationInput>;
  media?: InputMaybe<Array<MediaInput>>;
  openingHours?: InputMaybe<WorkingHoursInput>;
  price?: InputMaybe<Scalars['Int']>;
  privacy?: InputMaybe<Scalars['String']>;
  slogan?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  venueId?: InputMaybe<Scalars['Int']>;
  videos?: InputMaybe<Array<MediaInput>>;
};

export type UpdatePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type UpdateUserInput = {
  background_image?: InputMaybe<MediaInput>;
  bio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  profile_image?: InputMaybe<MediaInput>;
};

export type UpdateVenueInput = {
  address?: InputMaybe<Scalars['String']>;
  capacity?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  cover?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  googlePlaceId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  internationalPhoneNumber?: InputMaybe<Scalars['String']>;
  linkToWebsite?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<VenueLocationInput>;
  logo?: InputMaybe<Scalars['String']>;
  managers?: InputMaybe<Array<VenueManagerInput>>;
  media?: InputMaybe<Array<MediaInput>>;
  name?: InputMaybe<Scalars['String']>;
  workingHours: Array<WorkingHoursInput>;
};

export type UpdateVenueStaffInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  venueStaffId: Scalars['Int'];
};

export type UploadMediaFromAdminInput = {
  id: Scalars['Int'];
  media: Array<MediaInput>;
  type: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  background_image?: Maybe<MediaObject>;
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  followers: Scalars['Int'];
  followings: Scalars['Int'];
  hashtags: Array<HashtagUser>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  online: Scalars['Boolean'];
  password: Scalars['String'];
  permissions?: Maybe<Array<Scalars['Int']>>;
  profile_image?: Maybe<MediaObject>;
  role: Scalars['String'];
  salt: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserBlocked = {
  __typename?: 'UserBlocked';
  createdAt: Scalars['DateTime'];
  from: Scalars['Int'];
  fromUser: User;
  id: Scalars['Int'];
  to: Scalars['Int'];
  toUser: User;
  updatedAt: Scalars['DateTime'];
};

export type UserFollower = {
  __typename?: 'UserFollower';
  createdAt: Scalars['DateTime'];
  from: Scalars['Int'];
  fromUser: User;
  id: Scalars['Int'];
  status: Scalars['String'];
  to: Scalars['Int'];
  toUser: User;
  updatedAt: Scalars['DateTime'];
};

export type UserLogin = {
  __typename?: 'UserLogin';
  token: Scalars['String'];
  user: User;
};

export type UserLoginDto = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Venue = {
  __typename?: 'Venue';
  address: Scalars['String'];
  avgRate: Scalars['Float'];
  capacity?: Maybe<Scalars['String']>;
  category: Category;
  categoryId?: Maybe<Scalars['Float']>;
  comments: Array<VenueComment>;
  cover?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  featuredImageUrl?: Maybe<MediaObject>;
  feeds: Array<Feed>;
  googlePlaceId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  internationalPhoneNumber?: Maybe<Scalars['String']>;
  linkToWebsite?: Maybe<Scalars['String']>;
  location?: Maybe<VenueLocationObject>;
  logo?: Maybe<Scalars['String']>;
  media?: Maybe<Array<MediaObject>>;
  name: Scalars['String'];
  ownRate?: Maybe<Scalars['Float']>;
  totalComments: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  venueManagers: Array<VenueManager>;
  workingHours: Array<WorkingHoursObject>;
};

export type VenueComment = {
  __typename?: 'VenueComment';
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  likeCount: Scalars['Int'];
  parent?: Maybe<VenueComment>;
  replyCount: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  venue: Venue;
};

export type VenueLocationInput = {
  coordinates: Array<Scalars['String']>;
  type: Scalars['String'];
};

export type VenueLocationObject = {
  __typename?: 'VenueLocationObject';
  coordinates: Array<Scalars['String']>;
  type: Scalars['String'];
};

export type VenueManager = {
  __typename?: 'VenueManager';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  venue: Venue;
};

export type VenueManagerInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type VenueRate = {
  __typename?: 'VenueRate';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  rate: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  venue: Venue;
};

export type VenueStaff = {
  __typename?: 'VenueStaff';
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  venue: Venue;
  venueId: Scalars['Int'];
};

export type WorkingHoursInput = {
  closingTime: Scalars['String'];
  day: Scalars['String'];
  isOpen: Scalars['Boolean'];
  openingTime: Scalars['String'];
};

export type WorkingHoursObject = {
  __typename?: 'WorkingHoursObject';
  closingTime: Scalars['String'];
  day: Scalars['String'];
  isOpen: Scalars['Boolean'];
  openingTime: Scalars['String'];
};
